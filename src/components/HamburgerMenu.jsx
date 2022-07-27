import React from "react";
import "../styles/HamburgerMenu.css";
function HamburgerMenu({ openCart }) {
  return (
    <div className="hamburger-menu">
      <h1>Menu</h1>
      <h5>Home</h5>
      <h5>About</h5>
      <h5 onClick={openCart}>Cart</h5>
      <h5>MyAccount</h5>
    </div>
  );
}

export default HamburgerMenu;
