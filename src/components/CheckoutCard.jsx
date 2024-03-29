import React from 'react'
import '../styles/CheckoutCard.css'
import Amount from '../features/Amount'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function CheckoutCard() {
    return (
        <div className="checkout-card">
            <Link to="/productPage" className="checkout-img">img</Link>
            <div className="checkout-details">
                <p className="checkout-name">Product name$$</p>
                <p className="checkout-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, est
                    minima
                    quo excepturi veritatis quod labore rerum. Quae voluptatum veniam minima magni aut autem
                    repudiandae pariatur provident ut, ad perspiciatis exercitationem qui dolorem eius ipsam at
                    tempore molestias, nobis quod odio nihil sed eos nulla iure! Molestias dolorum excepturi
                    assumenda!</p>
                <p className="checkout-price">Product price</p>
            </div>
            <div className="checkout-btns">
                <Amount />
                <div className='trash'><FaTrash /></div>
            </div>
        </div>
    )
}

export default CheckoutCard