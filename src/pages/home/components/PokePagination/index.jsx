import { Pagination, Button } from "./styles";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import logo from "../../../../assets/images/logo.png";

export function PokePagination({ PrevPagination, NextPagination }) {
  return (
    <Pagination>
      <Button onClick={PrevPagination}>
        <CgChevronLeft className="text" /> Anterior
      </Button>
      <img src={logo} alt="logo pokeapi" />
      <Button onClick={NextPagination}>
        Próximo <CgChevronRight className="text" />
      </Button>
    </Pagination>
  );
}
