import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Api } from '../DAL/api'
import '../styles/ProductCard.css'
function ProductCard({ amount, product }) {
    const [img, setImg] = useState([])
    const [wishClick, setWishClick] = useState(false)
    const handleAddWishlist = () => {
        Api.addWishlist(product)
        setWishClick(true)
    }
    const handleRemoveWish = () => {
        Api.removeFromWishlist(product)
        setWishClick(false)
    }

    useEffect(() => {
        Api.getPhotos(product.id).then(setImg)
    }, [])// eslint-disable-line

    return (
        <div className="card">
            <Link to={`product/${product.id}`} className="card_img">
                <img src={img[0]?.imgSource} alt={product.name} />
            </Link>
            <p className="product_name">{product.productName}</p>
            <p className="product_des">description : {product.description}</p>
            <p className="product_price">Price: {product.unitPrice}$</p>
            {wishClick ? <button className="wish" onClick={handleRemoveWish}>remove from wishlist</button> : <button className="wish" onClick={handleAddWishlist}>add to wishlist</button>}
            <div className="card_btns">
                {amount > 0 ? <><button className="add-cart">add to cart</button>
                    <Link to="/checkout" className="buy">Buy it now</Link></> : <button className='oos'>Out of Stock</button>}

            </div>
        </div>
    )
}

export default ProductCard