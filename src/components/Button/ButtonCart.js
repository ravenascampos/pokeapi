import React from "react";
import Modal from "../Modal/Modal";
import * as S from "./StyleButton";
import { Link } from "react-router-dom";

export function ButtonCart() {
  return (
    <>
      <S.ContainerBtn>
        <Link to="/home" type="button">
          Continuar Comprando
        </Link>
        <Modal />
      </S.ContainerBtn>
    </>
  );
}

export default ButtonCart;
