import { useState } from "react";
import { DetailsModal } from "../components/DetailsModal";
import { PokemonList } from "../components/PokemonList";

export function Home() {
  //modalDetailsPokemon
  const [openModal, setOpenModal] = useState(false);
  function handleOpenModal() {
    setOpenModal(true);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }
  return (
    <>
      <PokemonList onOpenModal={handleOpenModal} />
      <DetailsModal isOpen={openModal} onRequestClose={handleCloseModal} />
    </>
  );
}
