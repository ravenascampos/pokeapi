import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem 2.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 5px 6px 10px rgba(0, 0, 0, 0.1);
  border: 2px solid #f2bd1d;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  img {
    width: 8rem;
    height: 8rem;
    margin-bottom: 1rem;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;

export const Button = styled.a`
  cursor: pointer;
  width: auto;
  padding: 0 1.5rem;
  height: 2.5rem;
  background: #f2db1d;
  color: #000;
  border-radius: 0.5rem;
  border: 2px solid #3761a8;
  font-size: 1rem;
  margin-top: 2rem;
  font-weight: 700;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.7);
  }

  .text {
    font-size: 1.3rem;
  }
`;
