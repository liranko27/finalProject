import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/singleProduct.css";
import Slider from "./Slider";
import Amount from "./Amount";
function ProductPage() {
  return (
    <>
      <Navbar></Navbar>
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
                {/* <input type="number" />
                <div className="amount-controls">
                  <button>⬆</button>
                  <button>⬇</button>
                </div> */}
                <Amount />
              </div>
            </div>
            <div className="product-btns">
              <button className="product-buy">Buy it now</button>
              <button className="product-cart">Add to cart</button>
              <button className="product-wish">Add to wishlist</button>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default ProductPage;
