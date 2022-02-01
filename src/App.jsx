import Modal from "react-modal";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./assets/styles/global";
import { Home } from "./pages/home/Home/index";

Modal.setAppElement("#root");

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}
