import React from "react";
import logo from "../images/logo.png";
import "../styles/navbar.css";
import NavLinks from "./NavLinks";
import CartMenu from "./CartMenu";
import LoginForm from "./LoginForm";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import RegisterForm from "./RegisterForm";

function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [signIn, setSingIn] = useState(false);
  const [hamburger, setHamburger] = useState(false)

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
          <img className="nav-logo" src={logo} alt="logo" />
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

          <div className="hamburger-btn" onClick={() => setHamburger(!hamburger)}></div>
          {hamburger ? <HamburgerMenu /> : ''}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
