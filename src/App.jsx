import Modal from "react-modal";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./assets/styles/global";
import { Home } from "./pages/home/Home/index";
import Log from "./pages/login/Log";

Modal.setAppElement("#root");

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Log />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}
