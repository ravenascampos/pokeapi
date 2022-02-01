import { useEffect, useState } from "react";
import Modal from "react-modal";
import pikachu from "../../../assets/images/pikachu.png";
import { apiPokemon } from "../../../../services/api";

export function DetailsModal() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    init();
  });

  async function init() {
    const response = await apiPokemon.get("/pokemon/{name}/");
    setPokemon(response.data?.results);
  }

  return (
    <Modal isOpen={true}>
      <div>
        {" "}
        {pokemon.map((pokemon, index) => (
          <h1 key={index}>{pokemon.name}</h1>
        ))}
        <img src={pikachu} alt="" />
        <p>
          É um do tipo Elétrico Pokémon introduzido na Geração I. Ele evolui de
          Pichu quando nivelado com alta amizade e evolui para Raichu quando
          exposto a uma Pedra do Trovão . Em Alola , Pikachu irá evoluir para
          Alolan Raichu quando exposto a uma Pedra do Trovão. Pikachu tem uma
          forma Gigantamax . Pikachu com o fator Gigantamax não pode evoluir.
        </p>
        <h3>R$ 20.000,00</h3>
        <button>Adicionar ao carrinho</button>
      </div>
    </Modal>
  );
}
