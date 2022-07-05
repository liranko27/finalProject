import React from "react";
import logo from "../images/logo.png";
import "../styles/navbar.css";
import NavLinks from "./NavLinks";
import CartMenu from "./CartMenu";
import LoginForm from "./LoginForm";
import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-left">
          <img className="nav-logo" src={logo} alt="logo" />
          <NavLinks />
        </div>
        <div className="nav-right">
          <div className="cart">
            cart <span className="cart_amount">2</span>
            <CartMenu />
          </div>
          <a className="signin" href="/">
            sign in/Register
          </a>
          <LoginForm />
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
