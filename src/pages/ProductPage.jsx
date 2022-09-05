import React, { useState } from "react";
import "../styles/singleProduct.css";
import Slider from "../features/Slider";
import Amount from "../features/Amount";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Api } from "../DAL/api";
import Spin from "../features/Spin";

function ProductPage() {
  const [product, setProduct] = useState(null)
  const [images, setImages] = useState([])
  const { id } = useParams()
  useEffect(() => {
    Api.getProduct(id).then(setProduct)
    Api.getPhotos(id).then(setImages)
  }, [])// eslint-disable-line
  return (
    <>
      {product ? <main className="product">
        <div className="product-img">
          <Slider images={images} />
        </div>
        <div className="product-deatils">
          <h2>{product?.productName}</h2>
          <div className="product-desc">
            <p>
              {product?.description}
            </p>
            <div className="price-quanitiy">
              <h5>
                Price: <span>{product?.unitPrice}$</span>
              </h5>
              <div className="amount-input">
                <h5>Quantity</h5>
                <Amount />
              </div>
            </div>
            <div className="product-btns">
              <Link to="/checkout" className="product-buy">Buy it now</Link>
              <button className="product-cart">Add to cart</button>
              <button className="product-wish">Add to wishlist</button>
            </div>
          </div>
        </div>
      </main> : <Spin />}
    </>

  );
}

export default ProductPage;
