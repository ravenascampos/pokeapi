import React from "react";
import * as S from './StyleButton'
import { Link } from "react-router-dom";
import { clearPokemon } from "../../Redux/Slice/CarrinhoSlice/carrinhoSlice";
import { useDispatch } from "react-redux";

export function ButtonModal(){

    const dispatch = useDispatch

    function clear(){
        dispatch(clearPokemon())
      }

    return(
        <>
            <S.contBtnModal>
                <Link to="/" onClick={clear}>Voltar para home</Link>
            </S.contBtnModal>
        </>
    );
}

export default ButtonModal;