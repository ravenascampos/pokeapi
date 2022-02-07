import React from "react";
import ButtonCart from "../../components/Button/ButtonCart";
import * as S from "./Style";
import { useSelector } from "react-redux";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import Navbar from "../../components/Navbar";

//import { formatPrice } from "../../utils/formatPrice";

export function Cart() {
  const pokemon = useSelector((state) => state.carrinho.pokemon);

  return (
    <>
      <Navbar />

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
              {pokemon.map((pokemon) => {
                return (
                  <tr>
                    <S.Celula>
                      <S.contPokemon>
                        <S.pokemon src={pokemon.image} alt={pokemon.name} />
                        <h3>{pokemon.name}</h3>
                      </S.contPokemon>
                    </S.Celula>
                    <S.Celula>
                      <S.ContainerContador>
                        <S.BtnContador>
                          <CgMathMinus />
                        </S.BtnContador>
                        <S.Contador>1</S.Contador>
                        <S.BtnContador>
                          <CgMathPlus />
                        </S.BtnContador>
                      </S.ContainerContador>
                    </S.Celula>
                    <S.Celula> {pokemon.price}</S.Celula>
                    <S.Celula>{pokemon.price}</S.Celula>
                  </tr>
                );
              })}
            </tbody>
            <tr>
              <S.Celula colSpan={3}></S.Celula>
              <S.Celula>Total: R$</S.Celula>
            </tr>
          </S.Table>
          <ButtonCart />
        </S.Section>
      </S.Container>
    </>
  );
}

export default Cart;
