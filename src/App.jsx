import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./assets/styles/global";
import { Home } from "./pages/home/Home/index";
import Profile from "./pages/profile/Profile"
import NavBar from "./components/Navbar"
import Modal from "react-modal";

Modal.setAppElement("#root");
export function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        
        
      </Routes>
      <GlobalStyle />
    </>
  );
}