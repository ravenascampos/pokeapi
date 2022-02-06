import React, { useState } from 'react';
import {BsCart3} from "react-icons/bs"
import {IoPersonOutline} from "react-icons/io5"
// import {FiLogIn} from "react-icons/fi"
import {
  Nav,
  NavLink,
  Menu,
  NavImg
} from './NavbarElements';

const Navbar = () => {
  
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <NavImg src="https://avatars.githubusercontent.com/u/64151210?v=4" alt='logo' />
        </NavLink>
        
        <Menu>
          <NavLink to='/car' activeStyle>
          <BsCart3/>
          </NavLink>
          <NavLink to='/profile' activeStyle>
            <IoPersonOutline/>
          </NavLink>
          <NavLink to='/login' activeStyle>
            {/* <FiLogIn/> */}
          </NavLink>
        </Menu>
        
        
       
      </Nav>
    </>
  );
};

export default Navbar;
