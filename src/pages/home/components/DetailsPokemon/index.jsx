import { Button, Card } from "./styles";
import { formatPrice } from "../../../../utils/formatPrice";
import { CgPokemon } from "react-icons/cg";

export function DetailsPokemon({ pokemon }) {
  return (
    <Card>
      <h1>{pokemon.name}</h1>
      <div className="content">
        <div className="img-type">
          <img
            src={
              pokemon.sprites.other.dream_world.front_default ||
              pokemon.sprites.front_shiny
            }
            alt={pokemon.name}
          />
          <div>
            {pokemon.types.map((types) => (
              <p>{types.type.name}</p>
            ))}
          </div>
        </div>
        <table>
          <tr>
            <th className="th-1">HP</th>
            <td className="td-1">{pokemon.stats[0].base_stat}</td>
          </tr>
          <tr>
            <th>Ataque</th>
            <td>{pokemon.stats[1].base_stat}</td>
          </tr>
          <tr>
            <th>Defesa</th>
            <td>{pokemon.stats[2].base_stat}</td>
          </tr>
          <tr>
            <th>Ataque Especial</th>
            <td>{pokemon.stats[3].base_stat}</td>
          </tr>
          <tr>
            <th>Defesa Especial</th>
            <td>{pokemon.stats[4].base_stat}</td>
          </tr>
          <tr>
            <th>Velocidade</th>
            <td>{pokemon.stats[5].base_stat}</td>
          </tr>
          <tr>
            <th>Altura</th>
            <td>{pokemon.height / 10} M</td>
          </tr>
          <tr>
            <th className="th-2">Peso</th>
            <td className="td-2">{pokemon.weight / 10} KG</td>
          </tr>
        </table>
      </div>

      <h3>{formatPrice(pokemon.weight * 0.9)}</h3>

      <Button>
        <CgPokemon className="text" />
        Capturar Pokemon
      </Button>
    </Card>
  );
}
