import React from "react";
import logo from "../images/logo.png";
import "../styles/navbar.css";
import NavLinks from "./NavLinks";
import CartMenu from "./CartMenu";
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
          <CartMenu />
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
