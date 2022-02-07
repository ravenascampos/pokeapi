import { useState, useEffect } from "react";
import { getAllPokemon, getPokemon } from "../../../services/api";
import { DivLoading, Container } from "./styles";
import { PokePagination } from "../components/PokePagination";
import { DetailsModal } from "../components/DetailsModal";
import { PokemonList } from "../components/PokemonList";
import pokebola_loading from "../../../assets/images/pokebola-loading.gif";

export function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokeList, setPokeList] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const InitialUrl = "https://pokeapi.co/api/v2/pokemon";

  //listagem de pokemons
  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(InitialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);

      setLoading(false);
    }
    fetchData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        console.log(pokemon.url);
        return pokemonRecord;
      })
    );

    setPokeList(_pokemonData);
  };

  //modalDetailsPokemon
  async function handleOpenModal(pokemon) {
    const response = await getPokemon("https://pokeapi.co/api/v2/pokemon/1/");
    const { id } = response;
    const { abilities } = response;
    const { height } = response;
    const { weight } = response;
    const { types } = response;
    const imageUrl = response.sprites.other.dream_world.front_default;

    const newPokemonDetails = {
      name: pokemon,
      id,
      abilities,
      height,
      weight,
      types,
      imageUrl,
    };
    console.log("inferno");
    console.log(newPokemonDetails);
    setPokeList(newPokemonDetails);
    setOpenModal(true);
  }
  function handleCloseModal() {
    setPokeList("");
    setOpenModal(false);
  }
  console.log(pokeList);
  return (
    <>
      {loading ? (
        <DivLoading>
          <img src={pokebola_loading} alt="gif de pokebola" />
        </DivLoading>
      ) : (
        <>
          <PokePagination PrevPagination={prev} NextPagination={next} />
          <Container>
            {pokeList.map((pokemon_unique, id) => {
              return (
                <>
                  <PokemonList
                    onOpenModal={handleOpenModal}
                    key={id}
                    pokemon={pokemon_unique}
                  />
                  <DetailsModal
                    isOpen={openModal}
                    onRequestClose={handleCloseModal}
                    pokemon={pokemon_unique}
                  />
                </>
              );
            })}
          </Container>

          <PokePagination PrevPagination={prev} NextPagination={next} />
        </>
      )}
    </>
  );
}
