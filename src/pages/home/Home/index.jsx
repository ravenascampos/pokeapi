import { useState, useEffect } from "react";
import { getAllPokemon, getPokemon } from "../../../services/api";
import { DivLoading, Container } from "./styles";
import { PokePagination } from "../components/PokePagination";
import { DetailsModal } from "../components/DetailsModal";
import { PokemonList } from "../components/PokemonList";
import pokebola_loading from "../../../assets/images/pokebola-loading.gif";

export function Home() {
  //modalDetailsPokemon
  const [openModal, setOpenModal] = useState(false);
  function handleOpenModal() {
    setOpenModal(true);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }

  //pokemons
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const InitialUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(InitialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      let pokemon = await loadingPokemon(response.results);
      console.log(pokemon);
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

    setPokemon(_pokemonData);
  };
  console.log(pokemon);

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
            {pokemon.map((pokemon, id) => {
              return (
                <PokemonList
                  onOpenModal={handleOpenModal}
                  key={id}
                  pokemon={pokemon}
                />
              );
            })}
          </Container>

          <PokePagination PrevPagination={prev} NextPagination={next} />
        </>
      )}
    </>
  );
}
/*
 <DetailsModal
              isOpen={openModal}
              onRequestClose={handleCloseModal}
            />*/
