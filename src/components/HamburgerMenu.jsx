import React from "react";
import "../styles/HamburgerMenu.css";
import { Link } from 'react-router-dom'
function HamburgerMenu({ openCart, close }) {
  function closeAfterClick() {
    close(false)
  }
  return (
    <div className="hamburger-menu">
      <h1>Menu</h1>
      <div>
        <Link to="/" onClick={closeAfterClick}>Home</Link>
      </div>
      <div>
        <Link to="/" onClick={closeAfterClick}>About</Link >
      </div>
      <div>
        <p onClick={openCart}>Cart</p>
      </div>
      <div>
        <Link to="/MyProfile" onClick={closeAfterClick}>MyAccount</Link>
      </div>
    </div>
  );
}


export default HamburgerMenu;
