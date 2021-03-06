import React from "react";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import logo from "../../assets/images/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IoPersonOutline } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { Nav, NavLink, Menu, NavImg } from "./NavbarElements";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid`,
    padding: "0 4px",
    color: "black",
  },
}));

const Navbar = () => {
  const pokemon = useSelector((state) => state.carrinho.pokemon);
  var quantity = 0;
  pokemon.forEach((poke) => {
    quantity += poke.quantity;
  });

  return (
    <>
      <Nav>
        <NavLink to="/home">
          <NavImg src={logo} alt="logo" />
        </NavLink>

        <Menu>
          <NavLink to="/cart" activeStyle>
            <StyledBadge badgeContent={quantity}>
              <ShoppingCartIcon />
            </StyledBadge>
          </NavLink>
          <NavLink to="/profile" activeStyle>
            <IoPersonOutline />
          </NavLink>
          <NavLink to="/" activeStyle>
            <FiLogIn />
          </NavLink>
        </Menu>
      </Nav>
    </>
  );
};

export default Navbar;
