import React, { useState } from 'react';
import LoginForm from './comp/Loginform';
import * as S from "./comp/login.style"

function Log() {
  const adminUser = {
    email: "ash@gmail.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name, 
        email: details.email
      });
    } else {
      console.log("Informações faltantes");
      setError("Informações faltantes");
    }
  }

  const Logout = () => {
    setUser({name: "", email: ""});
  }

  return (
    <S.Back>
      {(user.email !="") ? (
        <div className='welcome'>
          <h2>Bem vindo(a), <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </S.Back>
  );
}
export default Log;