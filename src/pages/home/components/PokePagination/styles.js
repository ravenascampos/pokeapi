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

export const Button = styled.button`
  cursor: pointer;
  width: auto;
  padding: 0 1.5rem;
  height: 2.5rem;
  background: #f2db1d;
  color: #000;
  border-radius: 0.5rem;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  font-weight: 700;
  position: relative;

  &::after,
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    border-radius: 0.5rem;
    border: 2px solid #3761a8;
    transform: scale(0);
  }

  &:hover::before,
  &:hover::after {
    transform: scale(1);
  }
`;
