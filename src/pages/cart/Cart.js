import React, { useState } from "react";
import ButtonCart from "../../components/Button/ButtonCart"
import * as S from './Style'
import { useSelector } from "react-redux";

export function Cart(){

    const pokemon = useSelector(state => state.carrinho.pokemon)
     
    

    return(
        <S.Container>
           <S.Section>
                <S.Table>
                    <thead>
                        <tr>
                            <S.TituloProduto>Produto</S.TituloProduto>
                            <S.TituloQuantidade>Quantidade</S.TituloQuantidade>
                            <S.TituloPreco>Preço</S.TituloPreco>
                            <S.TituloSubtotal>Subtotal</S.TituloSubtotal>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           pokemon.map(pokemon => {
                               return  <tr>
                                    <S.Celula>
                                        <S.contPokemon>
                                            <S.pokemon src={pokemon.image} alt={pokemon.name}/>
                                            <h3>{pokemon.name}</h3>
                                        </S.contPokemon>
                                    </S.Celula>
                                    <S.Celula>
                                    <S.ContainerContador>
                                       <S.BtnContador>-</S.BtnContador>
                                       <S.Contador>1</S.Contador>
                                       <S.BtnContador>+</S.BtnContador>
                                    </S.ContainerContador>
                                    </S.Celula>
                                    <S.Celula>R$ {pokemon.price}</S.Celula>
                                    <S.Celula>R${pokemon.price}</S.Celula>
                               </tr>
                           })
                       }
                    </tbody>
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