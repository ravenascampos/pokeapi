import Modal from "react-modal";
import { DetailsPokemon } from "../DetailsPokemon";
import { CgClose } from "react-icons/cg";
import { Button } from "./styles";

export function DetailsModal({ isOpen, onRequestClose, pokemon }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Button onClick={onRequestClose}>
        <CgClose className="icon" />
      </Button>

      <DetailsPokemon pokemon={pokemon} />
    </Modal>
  );
}
