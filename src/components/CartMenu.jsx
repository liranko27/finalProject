import React from "react";
import "../styles/CartMenu.css";
import CartProductCard from "./CartProductCard";
import { Link } from 'react-router-dom'
function CartMenu({ open }) {
  return open === false ? (
    ""
  ) : (
    <div className="cart-menu">
      <h1>cart</h1>
      <section className="cart-products">
        <CartProductCard />
        <CartProductCard />
        <CartProductCard />
        <CartProductCard />
      </section>
      <div className="cart-clear">
        <button>Clear all products</button>
        <Link className="Link" to="/checkout">Pay</Link>
        <p>Total price: 150$</p>
      </div>
    </div>
  );
}

export default CartMenu;
