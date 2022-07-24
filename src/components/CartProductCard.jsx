import React from 'react'
import Amount from './Amount'
import "../styles/CartMenu.css";

function CartProductCard() {
    return (
        <div className="cart-product">
            <div className="cart-img">image cap$$</div>
            <div className="cart-btns">
                <p>Product name</p>
                <div>
                    <Amount />
                </div>
            </div>
            <div>
                <p>Price 10$</p>
            </div>
        </div>
    )
}

export default CartProductCard