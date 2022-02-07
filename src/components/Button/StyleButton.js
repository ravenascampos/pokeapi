import Styled from "styled-components";

export const ContainerBtn = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 49vw;
    height: 10vh;
    margin-left: 50px;

  a{
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
text-decoration: none;
  &:hover {
    filter: brightness(0.7);
  }
    }
`;

export const contBtnModal = Styled.a`
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
