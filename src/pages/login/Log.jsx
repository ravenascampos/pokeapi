import React, { useState } from "react";
import LoginForm from "./comp/Loginform";
import * as S from "./comp/login.style";
import { Home } from "../home/Home";

function Log() {
  const adminUser = {
    email: "ash@gmail.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Informações faltantes");
      setError("Informações faltantes");
    }
  };
  /*
  const Logout = () => {
    setUser({ name: "", email: "" });
  };
*/
  return (
    <>
      {user.email !== "" ? (
        <Home />
      ) : (
        <S.Back>
          {" "}
          <LoginForm Login={Login} error={error} />
        </S.Back>
      )}
    </>
  );
}
export default Log;
