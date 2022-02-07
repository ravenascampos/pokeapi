import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 512px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
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
  margin-top: 1.5rem;
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
