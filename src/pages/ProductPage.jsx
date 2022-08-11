import React from "react";
import "../styles/singleProduct.css";
import Slider from "../features/Slider";
import Amount from "../features/Amount";
import { Link } from "react-router-dom";

function ProductPage() {
  return (
    <>
      <main className="product">
        <div className="product-img">
          <Slider />
        </div>
        <div className="product-deatils">
          <h2>Product Name</h2>
          <div className="product-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              nam, velit rem autem, minima voluptates at nulla quidem quibusdam
              itaque ipsum? Corporis eaque, sapiente laborum rem dolorum fuga
              minus adipisci exercitationem similique labore odit? Enim eaque
              blanditiis facere in impedit quis corrupti distinctio illum iure
              quisquam eius obcaecati molestiae magni officiis labore recusandae
              odit, fugit sint quasi. Ex architecto, asperiores perspiciatis,?{" "}
            </p>
            <div className="price-quanitiy">
              <h5>
                Price: <span>20$</span>
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
      </main>
    </>
  );
}

export default ProductPage;
