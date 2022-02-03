import Styled from "styled-components";



export const Section = Styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 55vw;
    height: 60vh;
    padding: 0 35px 20px 35px;
    background-color: #fff;
    border-radius: 15px;

    
`
    
export const Container = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgb(218, 216, 216);
`

export const Table = Styled.table`
    width: 55vw;
    height: 60vh;
`

export const TituloProduto = Styled.td`
    width: 20vw;
    height: 5vh;
    font-weight: bold;
    color: rgb(167, 167, 167);
`

export const TituloQuantidade = Styled.td`
    width: 10vw;
    height: auto;
    font-weight: bold;
    color: rgb(167, 167, 167);
`

export const TituloPreco = Styled.td`
    width: 12vw;
    font-weight: bold;
    color: rgb(167, 167, 167);
`

export const TituloSubtotal = Styled.td`
    font-weight: bold;
    color: rgb(167, 167, 167);
`

export const Celula = Styled.td`
    width: auto;
    height: 5vh;
    font-weight: bold;
    color: black;
`

export const ContainerContador = Styled.div`
    display: flex;
    justify-content: space-between;
    width: 5vw;
`

export const BtnContador = Styled.button`
    background-color: #fff;
    border: none;
    font-size: 1.5rem;
`

export const Contador = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black ;
    border-radius: 8px;
    width: 2.5vw;
    height: 3.5vh;
    text-align: center;
`

    