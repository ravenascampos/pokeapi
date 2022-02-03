import styled from "styled-components";

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
  grid-gap: 2.875rem;
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 1.25rem;
`;

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
    width: 8.562rem;
    height: 8.562rem;
    margin-bottom: 1rem;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 90%;
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
