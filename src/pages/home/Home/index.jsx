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
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemon, setPokemon] = useState([]);
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
        return pokemonRecord;
      })
    );

    setPokemonList(_pokemonData);
    console.log(_pokemonData);
  };

  //modalDetailsPokemon
  function handleOpenModal(pokemon, name) {
    let pokemonSelect = pokemon.filter(
      (pokemon_unique) => pokemon_unique.name === name
    );
    setPokemon(pokemonSelect);
    setOpenModal(true);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }

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
            {pokemonList.map((pokemon_unique, id) => {
              return (
                <>
                  <PokemonList
                    onOpenModal={(name) => handleOpenModal(pokemonList, name)}
                    key={id}
                    pokemon={pokemon_unique}
                  />
                </>
              );
            })}
            <DetailsModal
              isOpen={openModal}
              onRequestClose={handleCloseModal}
              pokemon={pokemon[0]}
            />
          </Container>

          <PokePagination PrevPagination={prev} NextPagination={next} />
        </>
      )}
    </>
  );
}
