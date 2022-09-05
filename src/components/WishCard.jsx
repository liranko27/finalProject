import React, { useState } from 'react'
import '../styles/WishCard.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Api } from '../DAL/api'
function WishCard({ amount, product, remove, wish }) {
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        Api.getPhotos(product.id).then(setPhotos)
    }, [])
    const handleDelete = () => {
        Api.removeFromWishlist(product)
        remove([...wish])
    }
    return (
        <div className="wishlist-card">
            <Link to={`/product/${product.id}`} className="wish-img">
                <img src={photos[0]?.imgSource} alt={product.name} />
            </Link>
            <div className="wish-details">
                <p className="wish-name">{product.productName}</p>
                <p className="wish-desc">{product.description}</p>
                <p className="wish-price">Price: {product.unitPrice}$</p>
            </div>
            {amount > 0 ? <div className="wish-btns">
                <button className="wish-remove" onClick={handleDelete}>Remove from wishlist</button>
                <button className="wish-cart">Add to cart</button>
                <Link to="/checkout" className="wish-buy">Buy it now</Link>
            </div> : <div className="wish-btns">
                <div className="oos-tag">Out of stock</div>
                <button className="wish-remove">Remove from wishlist</button>
                <button className="wish-buy">🔔 Notify me when item in stock</button>
            </div>}


        </div>
    )
}

export default WishCard