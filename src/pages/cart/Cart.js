import React from "react";
import ButtonCart from "../../components/Button/ButtonCart";
import * as S from "./Style";
import { useSelector } from "react-redux";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import Navbar from "../../components/Navbar";
import { getPokemon } from "../../Redux/Slice/CarrinhoSlice/carrinhoSlice";
import { useDispatch } from "react-redux";
import { formatPrice } from "../../utils/formatPrice";

export function Cart() {
  const pokemon = useSelector((state) => state.carrinho.pokemon);
  var total = 0;
  pokemon.forEach((poke) => {
    total += poke.quantity * poke.price;
  });

  const dispatch = useDispatch();

  function addPokemon(poke) {
    let newPoke = {
      name: poke.name,
      image: poke.image,
      price: poke.price,
      quantity: +1,
    };
    dispatch(getPokemon(newPoke));
  }

  function removePokemon(poke) {
    let newPoke = {
      name: poke.name,
      image: poke.image,
      price: poke.price,
      quantity: -1,
    };
    dispatch(getPokemon(newPoke));
  }

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
                        <S.BtnContador onClick={() => removePokemon(pokemon)}>
                          <CgMathMinus />
                        </S.BtnContador>
                        <S.Contador>{pokemon.quantity}</S.Contador>
                        <S.BtnContador onClick={() => addPokemon(pokemon)}>
                          <CgMathPlus />
                        </S.BtnContador>
                      </S.ContainerContador>
                    </S.Celula>
                    <S.Celula> {formatPrice(pokemon.price)}</S.Celula>
                    <S.Celula>
                      {formatPrice(pokemon.price * pokemon.quantity)}
                    </S.Celula>
                  </tr>
                );
              })}
            </tbody>
            <tr>
              <S.Celula colSpan={3}></S.Celula>
              <S.Celula>{formatPrice(total)}</S.Celula>
            </tr>
          </S.Table>
          <ButtonCart />
        </S.Section>
      </S.Container>
    </>
  );
}

export default Cart;
