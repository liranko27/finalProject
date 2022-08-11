import React from 'react'
import Amount from '../features/Amount'
import "../styles/CartMenu.css";
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function CartProductCard() {
    return (
        <div className="cart-product">
            <Link to="/productPage" className="cart-img">image cap$$</Link>
            <div className="cart-btns">
                <p>Product name</p>
                <div className='amount-trash'>
                    <Amount />
                    <FaTrash />
                </div>
            </div>
            <div>
                <p>Price 10$</p>
            </div>
        </div>
    )
}

export default CartProductCard