import { Header, DivLoading, Button, Card, Container, Footer } from "./styles";
import { useState, useEffect } from "react";
import pokebola_loading from "../../../../assets/images/pokebola-loading.gif";
import logo from "../../../../assets/images/logo.png";
import { getAllPokemons, getPokemon } from "../../../../services/api";

export function PokemonList({ onOpenModal }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [previousUrl, setPreviousUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemons(initialUrl);
      setNextUrl(response.next);
      setPreviousUrl(response.previous);
      let pokemon = await loadingPokemon(response.results);
      console.log(pokemon);
      setLoading(false);
    }
    fetchData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemons(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPreviousUrl(data.previous);
    setLoading(false);
  };
  const prev = async () => {
    if (!previousUrl) return;
    setLoading(true);
    let data = await getAllPokemons(previousUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPreviousUrl(data.previous);
    setLoading(false);
  };
  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };
  console.log(pokemonData);

  return (
    <>
      {loading ? (
        <DivLoading>
          <img src={pokebola_loading} alt="" />
        </DivLoading>
      ) : (
        <>
          <Header>
            <Button onClick={prev}>Anterior</Button>
            <img src={logo} alt="logo pokeapi" />
            <Button onClick={next}>Próximo</Button>
          </Header>
          <Container>
            {pokemonData.map((pokemon, i) => {
              return (
                <Card key={i} pokemon={pokemon}>
                  <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
                  <h1>{pokemon.name}</h1>
                  <h3>R$ 18.000,00</h3>
                  <Button onClick={onOpenModal}>info+</Button>
                  <Button>Adicionar ao carrinho</Button>
                </Card>
              );
            })}
          </Container>
          <Footer>
            <Button onClick={prev}>Anterior</Button>
            <img src={logo} alt="" />
            <Button onClick={next}>Próximo</Button>
          </Footer>
        </>
      )}
    </>
  );
  /*
  useEffect(() => {
    axios.get(POKEMON_API_URL + "pokemon/?limit=898").then((response) => {
      const { results } = response.data;
      let newPokemonData = [];
      results.forEach((pokemon, index) => {
        index++;
        let pokemonObject = {
          id: index,
          url: IMAGE_API_URL + index + ".png",
          name: pokemon.name,
        };
        newPokemonData.push(pokemonObject);
      });
      setPokemonData(newPokemonData);
    });
  }, []);

  return (
    <Container>
      {pokemonData.map((pokemon) => {
        return (
          <Card>
            <img src={pokemon.url} alt={pokemon.name} />
            <h1>{pokemon.name}</h1>
            <h3>R$ 18.000,00</h3>
            <Button onClick={onOpenModal}>info+</Button>
            <Button>Adicionar ao carrinho</Button>
          </Card>
        );
      })}
    </Container>
  );*/
}
