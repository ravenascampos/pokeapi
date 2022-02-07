import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./assets/styles/global";
import { Home } from "./pages/home/Home/index";
import Profile from "./pages/profile/Profile";
import NavBar from "./components/Navbar";
import Cart from "./pages/cart/Cart";
<<<<<<< HEAD
import Log from "./pages/login/Log";
import Modal from "react-modal";
import { Routes, Route } from "react-router-dom";
=======
import Modal from "react-modal";
>>>>>>> Developer

Modal.setAppElement("#root");
export function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
<<<<<<< HEAD
        <Route path="login" element={<Log />} />
=======
>>>>>>> Developer
      </Routes>
      <GlobalStyle />
    </>
  );
}
