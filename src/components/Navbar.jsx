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
  const [open, setOpen] = useState(true);
  const [openLogin, setOpenLogin] = useState(false);
  const [signIn, setSingIn] = useState(false);
  function handleClick(comp) {
    if (comp === "cart") {
      setOpen(false);
    }
    if (comp === "login") {
      setOpenLogin(!openLogin);
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
            <CartMenu open={open} />
          </div>
          <div className="signin" onClick={() => handleClick("login")}>
            sign in/Register
          </div>
          {signIn ? (
            <LoginForm open={openLogin} setOpen={setOpenLogin} />
          ) : (
            <RegisterForm
              open={openLogin}
              setOpen={setOpenLogin}
              setSingIn={setSingIn}
            />
          )}

          <div className="search">
            <input type="text" className="search" />
            <button className="search-btn">search</button>
          </div>

          <div className="hamburger-btn">
            <HamburgerMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
