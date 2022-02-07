import React, { useState } from "react";
import "./login.style.js";
import * as S from "./login.style";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <S.Form onSubmit={submitHandler}>
      <S.DivContainer>
        <S.Im src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />
        {error !== "" ? <div className="error">{error}</div> : ""}
        <S.FormGroup>
          <S.Label htmlFor="name">Nome:</S.Label>
          <S.Input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
          <S.FormGroup>
            <S.Label htmlFor="email">E-mail: </S.Label>
            <S.Input
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.Label htmlFor="password">Senha:</S.Label>
            <S.Input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </S.FormGroup>
          <S.Button type="submit" value="LOGIN" />
        </S.FormGroup>
      </S.DivContainer>
    </S.Form>
  );
}

export default LoginForm;
