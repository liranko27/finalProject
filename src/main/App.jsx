import "../styles/App.css";
import ProductPage from "../pages/ProductPage";
import Homepage from "../pages/Homepage";
import MyProfile from "../pages/MyProfile";
import Checkout from "../pages/Checkout";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Routes, Route } from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";
import { Api } from "../DAL/api";


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(() => {
    Api.checkCookie().then(setLoggedIn)
  }, [])
  console.log(loggedIn)
  return (
    <div className="App">
      <Navbar loggedIn={loggedIn} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="myProfile" element={<MyProfile />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="about" element={<div style={{ color: "blue", margin: "15rem 0rem" }}>About Page</div>} />
        <Route path="*" element={<Homepage />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
