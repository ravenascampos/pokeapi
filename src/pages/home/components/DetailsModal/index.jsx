import Modal from "react-modal";
import { Card } from "./style";

export function DetailsModal({ isOpen, onRequestClose, pokemon }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Card>
        <h1>{pokemon.name}</h1>
        <img src="" alt="Pikachu" />
        <p></p>
        <p></p>
        <h3> 20.000,00</h3>
        <button>Adicionar ao carrinho</button>
      </Card>
    </Modal>
  );
}
