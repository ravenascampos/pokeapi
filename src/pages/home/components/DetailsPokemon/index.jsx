import { useEffect, useState } from "react";
import { Card } from "./styles";

export function DetailsPokemon({ pokemon }) {
  const [pokemonDetails, setPokemonDetails] = useState(pokemon);

  useEffect(() => {
    setPokemonDetails(pokemon);
  }, [pokemon]);

  console.log(pokemonDetails);
  return (
    <Card>
      <h1>{pokemonDetails.name}</h1>
      <img src="#" alt="Pikachu" />
      <p></p>
      <p></p>
      <h3> 20.000,00</h3>
      <button>Adicionar ao carrinho</button>
    </Card>
  );
}
