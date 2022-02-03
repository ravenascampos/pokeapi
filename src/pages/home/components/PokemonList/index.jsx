import { Button, Card, Container } from "./styles";
import { useState, useEffect } from "react";
import axios from "axios";
import { POKEMON_API_URL, IMAGE_API_URL } from "../../../../services/api";

export function PokemonList({ onOpenModal }) {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    axios.get(POKEMON_API_URL + "pokemon/?limit=898").then((response) => {
      if (response.status >= 200 && response.status < 300) {
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
      }
    });
  }, []);

  return (
    <Container>
      {pokemonData.map((pokemon) => {
        return (
          <Card onClick={onOpenModal}>
            <img src={pokemon.url} alt={pokemon.name} />
            <h1>{pokemon.name}</h1>
            <h3>R$ 18.000,00</h3>
            <Button>Adicionar ao carrinho</Button>
          </Card>
        );
      })}
    </Container>
  );
}
