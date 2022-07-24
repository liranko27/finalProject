import React from 'react'
import '../styles/ProductCard.css'
function ProductCard({ amount }) {
    return (
        <div className="card">
            <div className="card_img">
                image cap$$
            </div>
            <p className="product_name">product name</p>
            <p className="product_des">Product description</p>
            <p className="product_price">Product price</p>
            <button className="wish">add to wishlist</button>
            <div className="card_btns">
                {amount > 0 ? <><button className="add-cart">add to cart</button>
                    <button className="buy">Buy it now</button></> : <button className='oos'>Out of Stock</button>}

            </div>
        </div>
    )
}

export default ProductCard