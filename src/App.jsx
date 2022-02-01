import Modal from "react-modal";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./assets/styles/global";
import { Home } from "./pages/home/Home/index";
import LoginForm from "./pages/login/Loginform";

Modal.setAppElement("#root");

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginForm />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}
