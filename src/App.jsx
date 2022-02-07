import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./assets/styles/global";
import { Home } from "./pages/home/Home/index";
import Profile from "./pages/profile/Profile";
import Cart from "./pages/cart/Cart";
import Log from "./pages/login/Log";
import Modal from "react-modal";

Modal.setAppElement("#root");
export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Log />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}
