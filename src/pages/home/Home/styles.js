import styled from "styled-components";

export const DivLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12.5rem;

  img {
    max-width: 12rem;
    max-height: 12rem;
  }
`;

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
  grid-gap: 2.875rem;
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 1.25rem;
`;
