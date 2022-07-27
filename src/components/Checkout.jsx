import React from 'react'
import CheckoutCard from './CheckoutCard'
import '../styles/Checkout.css'
function Checkout() {
    return (
        <>
            <div className="checkout-wrap">
                <div className='checkout-details'>
                    <div>
                        Summary: 140$
                    </div>
                    <h1>Address</h1>
                    <div>
                        <label>City</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Street</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>ZipCode</label>
                        <input type="number" />
                    </div>
                    <button className='checkout-btn'>Checkout</button>
                </div>
                <div className="checkout-cards">
                    <CheckoutCard />
                    <CheckoutCard />
                    <CheckoutCard />
                    <CheckoutCard />
                </div>

            </div>
        </>
    )
}

export default Checkout