import React from 'react'
import '../styles/CheckoutCard.css'
import Amount from './Amount'
function CheckoutCard() {
    return (
        <div className="checkout-card">
            <div className="checkout-img">img</div>
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
                <div>🗑</div>
            </div>
        </div>
    )
}

export default CheckoutCard