import { Button, Card } from "./styles";
import { formatPrice } from "../../../../utils/formatPrice";
import { MdAddShoppingCart, MdOutlineInfo } from "react-icons/md";

export function PokemonList({ onOpenModal, pokemon }) {
  return (
    <Card>
      <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
      <h1>{pokemon.name}</h1>
      <h3>{formatPrice(pokemon.weight * 0.9)}</h3>
      <div>
        <Button onClick={onOpenModal}>
          <MdOutlineInfo />
        </Button>
        <Button>
          <MdAddShoppingCart />
        </Button>
      </div>
    </Card>
  );
}
