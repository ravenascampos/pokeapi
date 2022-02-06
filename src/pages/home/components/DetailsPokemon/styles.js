import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem 2.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  img {
    width: 8.562rem;
    height: 8.562rem;
    margin-bottom: 1rem;
  }

  button {
    cursor: pointer;
    width: auto;
    padding: 0 1.5rem;
    height: 2.5rem;
    background: #f2db1d;
    color: #000;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 700;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;
