import { Button, Card } from "./styles";
import { formatPrice } from "../../../../utils/formatPrice";
import { CgPokemon } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemon } from "../../../../Redux/Slice/CarrinhoSlice/carrinhoSlice";

export function DetailsPokemon({ pokemon }) {
  const value = formatPrice(pokemon.weight * 10);

  const compra = {
    name: pokemon.name,
    image:
      pokemon.sprites.other.dream_world.front_default ||
      pokemon.sprites.front_shiny,
    price: value,
  };

  const dispatch = useDispatch();

  function sendPokemon() {
    dispatch(getPokemon(compra));
  }

  return (
    <Card>
      <h1>{compra.name}</h1>
      <div className="content">
        <div className="img-type">
          <img src={compra.image} alt={compra.name} />
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

      <h3>{value}</h3>
      <Link to="/cart" onClick={sendPokemon}>
        <Button>
          <CgPokemon className="text" />
          Capturar Pokemon
        </Button>
      </Link>
    </Card>
  );
}
