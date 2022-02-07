import styled from "styled-components";

export const Button = styled.a`
  cursor: pointer;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
  .text {
    font-size: 1.3rem;
  }
`;
