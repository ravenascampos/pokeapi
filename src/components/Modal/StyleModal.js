import Styled from "styled-components";

export const OpenModal = Styled.button`
     cursor: pointer;
  width: auto;
  padding: 0 1.5rem;
  height: 2.5rem;
  background: #f2db1d;
  color: #000;
  border-radius: 0.5rem;
  border: 2px solid #3761a8;
  font-size: 1rem;
  margin-top: 1.5rem;
  font-weight: 700;
  transition: filter 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.7);
  }
`;

export const CloseModal = Styled.span`
    display: flex;
    justify-content: end;
`;

export const BtnCloseModal = Styled.span`
    border: none;
    background-color: #fff;
    cursor: pointer;
`;

export const IconCart = Styled.span`
    margin: auto;
    width: 12vw;
    text-align: center;
`;

export const ContTexto = Styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: auto;
    height: 12vh;
    font-family: 'Lato', sans-serif;
    margin-bottom: 25px;
`;

export const ConteudoModal = Styled.span`
    margin: auto;
    width: 12vw;
    text-align: center;
`;

export const ContBotao = Styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`;

export const Box = Styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 350;
    height: 30vh;
    border-radius: 10px;
    background-color: #fff;
    border: 2px solid none;
    padding: 1.3rem;
`;
