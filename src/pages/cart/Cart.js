import React, { useState } from "react";
import ButtonCart from "./Components/Button/ButtonCart";
import * as S from './Style'

export function Cart(){

    const [contador, setContador] = useState(1)
    const [valores, setValores] = useState({
        preco: 20000, somaPreco: 20000
    })

    function decrement(){
        contador <= 1 ? setContador(1) : setContador(contador - 1)
        contador === 1 ? setValores({...valores, somaPreco: valores.preco}) : setValores({...valores, somaPreco: valores.somaPreco - valores.preco})
    }

    function increment(){
        setContador(contador + 1)
        setValores({...valores, somaPreco: valores.somaPreco + valores.preco})
    }

    return(
        <S.Container>
           <S.Section>
                <S.Table>
                    <tr>
                        <S.TituloProduto>Produto</S.TituloProduto>
                        <S.TituloQuantidade>Quantidade</S.TituloQuantidade>
                        <S.TituloPreco>Preço</S.TituloPreco>
                        <S.TituloSubtotal>Subtotal</S.TituloSubtotal>
                    </tr>
                    <tr>
                        <S.Celula></S.Celula>
                        <S.Celula>
                            <S.ContainerContador>
                                <S.BtnContador onClick={decrement}>-</S.BtnContador>
                                <S.Contador>{contador}</S.Contador>
                                <S.BtnContador onClick={increment}>+</S.BtnContador>
                            </S.ContainerContador>
                        </S.Celula>
                        <S.Celula>R$ {valores.preco}</S.Celula>
                        <S.Celula>R${valores.somaPreco}</S.Celula>
                    </tr>
                    <tr>
                        <S.Celula colSpan={3}></S.Celula>
                        <S.Celula>Total: R$</S.Celula>
                    </tr>
                </S.Table>
                <ButtonCart/>
            </S.Section>
        </S.Container>
    )
}

export default Cart;