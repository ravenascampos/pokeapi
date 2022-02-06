import { Pagination, Button } from "./styles";
import logo from "../../../../assets/images/logo.png";

export function PokePagination({ PrevPagination, NextPagination }) {
  return (
    <Pagination>
      <Button onClick={PrevPagination}>Anterior</Button>
      <img src={logo} alt="logo pokeapi" />
      <Button onClick={NextPagination}>Próximo</Button>
    </Pagination>
  );
}
