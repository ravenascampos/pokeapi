import Modal from "react-modal";
import { DetailsPokemon } from "../DetailsPokemon";

export function DetailsModal({ isOpen, onRequestClose, pokemon }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <DetailsPokemon pokemon={pokemon} />
    </Modal>
  );
}
