import React from "react";
import "../styles/CartMenu.css";

function CartMenu() {
  return (
    <div className="cart hidden">
      cart <span className="cart_amount">2</span>
      <div className="cart-menu ">
        <h1>cart</h1>
        <section className="cart-products">
          <div className="cart-product">
            <div className="cart-img">image cap</div>
            <div className="cart-btns">
              <p>Product name</p>
              <div>
                <i className="fas fa-trash-alt"></i>
                <input type="number" />
              </div>
            </div>
            <div>
              <p>Price 10$</p>
            </div>
          </div>
          <div className="cart-product">
            <div className="cart-img">image cap</div>
            <div className="cart-btns">
              <p>Product name</p>
              <div>
                <i className="fa-solid fa-trash-can"></i>
                <input type="number" />
              </div>
            </div>
            <div>
              <p>Price 10$</p>
            </div>
          </div>
          <div className="cart-product">
            <div className="cart-img">image cap</div>
            <div className="cart-btns">
              <p>Product name</p>
              <div>
                <i className="fa-solid fa-trash-can"></i>
                <input type="number" />
              </div>
            </div>
            <div>
              <p>Price 10$</p>
            </div>
          </div>
          <div className="cart-product">
            <div className="cart-img">image cap</div>
            <div className="cart-btns">
              <p>Product name</p>
              <div>
                <i className="fa-solid fa-trash-can"></i>
                <input type="number" />
              </div>
            </div>
            <div>
              <p>Price 10$</p>
            </div>
          </div>
          <div className="cart-product">
            <div className="cart-img">image cap</div>
            <div className="cart-btns">
              <p>Product name</p>
              <div>
                <i className="fa-solid fa-trash-can"></i>
                <input type="number" />
              </div>
            </div>
            <div>
              <p>Price 10$</p>
            </div>
          </div>
        </section>
        <div className="cart-clear">
          <button>Clear all products</button>
          <button>Pay</button>
          <p>Total price: 150$</p>
        </div>
      </div>
    </div>
  );
}

export default CartMenu;
