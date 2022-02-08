import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  top: 30px;
  overflow: hidden;
  margin-bottom: 3rem;
`;

export const Section = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 100%;
  min-height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 35px 35px 20px 35px;
  background-color: #fff;
  border-radius: 15px;
  -webkit-box-shadow: 3px -7px 18px 2px rgba(0, 0, 0, 0.47);
  box-shadow: 3px -7px 18px 2px rgba(0, 0, 0, 0.47);
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const pokemon = styled.img`
  width: 6rem;
  height: auto;
`;

export const contPokemon = styled.div`
  width: 15vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const Table = styled.table`
  width: 55vw;
  height: 60vh;
  margin-top: 10px;
`;

export const TituloProduto = styled.td`
  width: 20vw;
  height: 5vh;
  font-weight: bold;
  color: rgb(167, 167, 167);
`;

export const TituloQuantidade = styled.td`
  width: 10vw;
  height: auto;
  font-weight: bold;
  color: rgb(167, 167, 167);
`;

export const TituloPreco = styled.td`
  width: 12vw;
  font-weight: bold;
  color: rgb(167, 167, 167);
`;

export const TituloSubtotal = styled.td`
  font-weight: bold;
  color: rgb(167, 167, 167);
`;

export const Celula = styled.td`
  width: auto;
  height: 5vh;
  font-weight: bold;
  color: black;
`;

export const ContainerContador = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20vw;
  margin-right: 50px;
`;

export const BtnContador = styled.button`
  background-color: #fff;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;

export const Contador = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 8px;
  width: 2.5vw;
  height: 3.5vh;
  text-align: center;
`;
export const Linha = styled.tr`
  overflow-y: scroll;
  min-height: 300px;
`;
