import pikachuImg from "../../../../assets/images/pikachu.png";
import charmanderImg from "../../../../assets/images/charmander.png";
import squirtleImg from "../../../../assets/images/squirtle.png";
import bulbasaurImg from "../../../../assets/images/bulbasaur.png";
import { Button, Card, Container } from "./styles";

export function PokemonItem() {
  return (
    <Container>
      <Card>
        <img src={pikachuImg} alt="" />
        <h1>Pikachu</h1>
        <p>Pokemon tipo elétrico</p>
        <h3>R$ 20.000,00</h3>
        <Button>Adicionar ao carrinho</Button>
      </Card>
      <Card>
        <img src={charmanderImg} alt="" />
        <h1>Charmander</h1>
        <p>Pokemon tipo fogo</p>
        <h3>R$ 18.000,00</h3>
        <Button>Adicionar ao carrinho</Button>
      </Card>
      <Card>
        <img src={squirtleImg} alt="" />
        <h1>Squirtle</h1>
        <p>Pokemon tipo água</p>
        <h3>R$ 15.500,00</h3>
        <Button>Adicionar ao carrinho</Button>
      </Card>
      <Card>
        <img src={bulbasaurImg} alt="" />
        <h1>Bulbasaur</h1>
        <p>Pokemon tipo grama/veneno</p>
        <h3>R$ 14.500,00</h3>
        <Button>Adicionar ao carrinho</Button>
      </Card>
    </Container>
  );
}
