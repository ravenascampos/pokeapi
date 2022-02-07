import { Card } from "./styles";
import { formatPrice } from "../../../../utils/formatPrice";
import { MdAddShoppingCart, MdOutlineInfo } from "react-icons/md";
import { useDispatch} from "react-redux";
import { getPokemon } from "../../../../Redux/Slice/CarrinhoSlice/carrinhoSlice";
import { Link } from "react-router-dom";

export function PokemonList({ onOpenModal, pokemon }) {

  const wight = formatPrice(pokemon.weight * 0.9);

  const compra = {
    name: pokemon.name,
    image: pokemon.sprites.other.dream_world.front_default,
    price: wight
  }

  
  const dispatch = useDispatch()

  function sendPokemon(){
    dispatch(getPokemon(compra))
  }

  return (
    <Card>
      <img src={compra.image} alt={compra.name} />
      <h1>{compra.name}</h1>
      <h3>{wight}</h3>
      <div>
        <Link to="" onClick={onOpenModal}>
          <MdOutlineInfo />
        </Link>
        <Link to="/Cart" onClick={sendPokemon}>
          <MdAddShoppingCart />
        </Link>
      </div>
    </Card>
  );
}
