import { Card, Button } from "./styles";
import { formatPrice } from "../../../../utils/formatPrice";
import { MdAddShoppingCart, MdOutlineInfo } from "react-icons/md";
import { useDispatch } from "react-redux";
import { getPokemon } from "../../../../Redux/Slice/CarrinhoSlice/carrinhoSlice";
import { Link } from "react-router-dom";

export function PokemonList({ onOpenModal, pokemon }) {
  const value = pokemon.weight * 10;

  const compra = {
    name: pokemon.name,
    image:
      pokemon.sprites.other.dream_world.front_default ||
      pokemon.sprites.front_shiny,
    price: value,
    quantity: 1,
  };

  const dispatch = useDispatch();

  function sendPokemon() {
    dispatch(getPokemon(compra));
    console.log(getPokemon(compra));
  }

  return (
    <Card>
      <img src={compra.image} alt={compra.name} />
      <h1>{compra.name}</h1>
      <h3>{formatPrice(value)}</h3>
      <div>
        <Button onClick={() => onOpenModal(pokemon.name)}>
          <MdOutlineInfo className="text" />
        </Button>
        <Button>
          <Link to="/Cart" className="text" onClick={sendPokemon}>
            <MdAddShoppingCart />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
