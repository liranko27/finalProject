import React from "react";
import { Link } from 'react-router-dom'
function NavLinks() {
  return (
    <ul className="links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about" href="/">about</Link>
      </li>
    </ul>
  );
}

export default NavLinks;
