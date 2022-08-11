import React from "react";
import logo from "../images/logo.png";
import "../styles/navbar.css";
import NavLinks from "../components/NavLinks";
import CartMenu from "../components/CartMenu";
import LoginForm from "../components/LoginForm";
import HamburgerMenu from "../components/HamburgerMenu";
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";

function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [signIn, setSingIn] = useState(false);
  const [hamburger, setHamburger] = useState(false)

  function openCartHamburger() {
    setHamburger(false)
    setOpenCart(true)
  }
  function openHambuergerMenu() {
    setHamburger(!hamburger)
    setOpenCart(false)
  }

  function handleClick(comp) {
    if (comp === "cart") {
      setOpenLogin(false);
      setOpenCart(!openCart)
    }
    if (comp === "login") {
      setOpenLogin(!openLogin);
      setOpenCart(false)
    }
  }
  return (
    <header>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/">
            <img className="nav-logo" src={logo} alt="logo" />

          </Link>
          <NavLinks />
        </div>
        <div className="nav-right">
          <div className="cart" onClick={() => handleClick("cart")}>
            cart <span className="cart_amount">2</span>
          </div>
          <CartMenu open={openCart} />
          <div className="signin" onClick={() => handleClick("login")}>
            {false ? 'my account' : 'sign in/Register'}
          </div>
          {signIn ? (
            <RegisterForm
              open={openLogin}
              setOpen={setOpenLogin}
              setLogin={setSingIn}
              login={signIn}
            />
          ) : (
            <LoginForm open={openLogin} setOpen={setOpenLogin} login={signIn} setLogin={setSingIn} />
          )}

          <div className="search">
            <input type="text" className="search" />
            <button className="search-btn">search</button>
          </div>

          <div className="hamburger-btn" onClick={openHambuergerMenu}>
            <GiHamburgerMenu />
          </div>
          {hamburger ? <HamburgerMenu openCart={openCartHamburger} close={setHamburger} /> : ''}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
