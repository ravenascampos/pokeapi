import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem 2.5rem;

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

  table,
  tr,
  th,
  td {
    margin: 0;
    padding: 0.5rem 1rem;
    border: 0;

    font-size: 100%;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    margin-bottom: 1rem;
  }

  th,
  td {
    text-align: left;
    margin-left: 2rem;
  }

  th {
    background: #be93c5;
  }

  .th-1 {
    border-radius: 0.6rem 0 0 0;
  }

  td {
    background: #7bc6cc;
  }

  .td-2 {
    border-radius: 0 0 0.6rem 0;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
  p {
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 1rem;
    text-align: center;
  }

  .img-type {
    display: flex;
    margin-right: 1rem;
    align-items: center;
  }

  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
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
  transition: filter 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.7);
  }

  .text {
    margin-right: 1rem;
    font-size: 1.5rem;
  }
`;
