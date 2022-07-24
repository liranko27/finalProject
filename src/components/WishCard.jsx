import React from 'react'
import '../styles/WishCard.css'
function WishCard({ amount }) {
    console.log(amount)
    return (
        <div className="wishlist-card">
            <div className="wish-img">img</div>
            <div className="wish-details">
                <p className="wish-name">Product name$$</p>
                <p className="wish-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, est
                    minima
                    quo excepturi veritatis quod labore rerum. Quae voluptatum veniam minima magni aut autem
                    repudiandae pariatur provident ut, ad perspiciatis exercitationem qui dolorem eius ipsam at
                    tempore molestias, nobis quod odio nihil sed eos nulla iure! Molestias dolorum excepturi
                    assumenda!</p>
                <p className="wish-price">Product price</p>
            </div>
            {amount > 0 ? <div className="wish-btns">
                <button className="wish-remove">Add to wishlist</button>
                <button className="wish-cart">Add to cart</button>
                <button className="wish-buy">Buy it now</button>
            </div> : <div className="wish-btns">
                <div className="oos-tag">Out of stock</div>
                <button className="wish-remove">Remove from wishlist</button>
                <button className="wish-buy">🔔 Notify me when item in stock</button>
            </div>}


        </div>
    )
}

export default WishCard