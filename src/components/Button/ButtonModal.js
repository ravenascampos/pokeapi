import React from "react";
import * as S from "./StyleButton";
import { Link } from "react-router-dom";

export function ButtonModal() {
  return (
    <>
      <S.contBtnModal>
        <Link to="/home">Voltar para home</Link>
      </S.contBtnModal>
    </>
  );
}

export default ButtonModal;
