/*@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,500;0,700;0,800;0,900;1,400;1,600;1,800;1,900&display=swap'); */

/*
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
}

input, button {  
  appearance: none;
  background: none;
  border: none ;
  outline: none;
} */

import styled from "styled-components";

export const Back = styled.div `  
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://sm.ign.com/ign_br/news/p/pokemon-un/pokemon-unite-gets-a-release-date-on-mobile-devices_4kdt.png"); 
  background-size: cover;
`;

export const Form = styled.form `
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;

`;

export const DivContainer = styled.div `
  position: relative;
  display: block;
  background: rgba(255, 255, 255, 0.15);
  padding: 30px;
  z-index: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
`;

  /* position: relative;
  display: block;
  background: rgba(255, 255, 255, 0.15);
  padding: 30px;
  z-index: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
`; */

export const Title = styled.h2 `
  color: rgb(94, 89, 89);
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 30px;
  margin: 3rem 0 2rem 0;
`;

export const FormGroup = styled.div`  
  display: block;
  width: 300px;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  color: #666;
  font-size: 15px;
  margin-bottom: 10px;
  transition: 0.4s;
`;

/*muda a cor do texto quando clica em cima
.form-inner .form-group:focus-within label {
  color: #5448fe;
}*/

export const Input = styled.input `
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 100%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #5f4d9199;
    font-weight: 100;
    font-size: 1rem;
  }

/*  display: block;
  width: 100%;
  padding: 10px 15px;
  background-color: #F8F8F8;
  border-radius: 8px;
  transition: 0.4s;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  height: 3rem;
  display: inline-block;
  box-shadow: 0 0 0 0.2rem #b9abe0;
  backdrop-filter: blur(12rem);
  border-radius: 2rem;
  appearance: none;
  background: none;
  border: none ;
  outline: none; */
`;

/*form .form-inner .form-group input:focus {
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
} */

export const Button = styled.input ` 
  display: inline-block;
  padding: 10px 15px;
  border-radius: 8px;
  background-size: 200%;
  background-position: 0%;
  transition: 0.4s;
  font-weight: 700;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  height: 3rem;
  border: none;
  color: white;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  margin: 1rem 0 2rem 0;
  &:hover { 
  background-position: 100% 0%;
 
}
`; 
