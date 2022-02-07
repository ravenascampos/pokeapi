import { Button, Card } from "./styles";
import { formatPrice } from "../../../../utils/formatPrice";
import { MdAddShoppingCart, MdOutlineInfo } from "react-icons/md";

export function PokemonList({ onOpenModal, pokemon }) {
  return (
    <Card>
      <img
        src={
          pokemon.sprites.other.dream_world.front_default ||
          pokemon.sprites.front_shiny
        }
        alt={pokemon.name}
      />
      <h1>{pokemon.name}</h1>
      <h3>{formatPrice(pokemon.weight * 0.9)}</h3>
      <div>
        <Button onClick={() => onOpenModal(pokemon.name)}>
          <MdOutlineInfo className="text" />
        </Button>
        <Button>
          <MdAddShoppingCart className="text" />
        </Button>
      </div>
    </Card>
  );
}
