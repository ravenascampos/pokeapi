import React from "react";
import Modal from "../Modal/Modal";
import * as S from './StyleButton'

export function ButtonCart(){

    return(
        <>
            <S.ContainerBtn>
                <S.BtnCotinuar type="button">Continuar Comprando</S.BtnCotinuar>
                <Modal/>
            </S.ContainerBtn>
        </>
    );
}

export default ButtonCart;