import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './style.css'
import './singleProduct.css'
function ProductPage() {
  return (
    <>
    <Navbar></Navbar>
       <main class="product">
        <div class="product-img">
            img
        </div>
        <div class="product-deatils">
            <h2>Product Name</h2>
            <div class="product-desc">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores nam, velit rem autem, minima
                    voluptates at nulla quidem quibusdam itaque ipsum? Corporis eaque, sapiente laborum rem dolorum fuga
                    minus adipisci exercitationem similique labore odit? Enim eaque blanditiis facere in impedit quis
                    corrupti distinctio illum iure quisquam eius obcaecati molestiae magni officiis labore recusandae
                    odit, fugit sint quasi. Ex architecto, asperiores perspiciatis,? </p>
                <div class="product-btns">
                    <button class="product-buy">Buy it now</button>
                    <button class="product-cart">Add to cart</button>
                    <button class="product-wish">Add to wishlist</button>
                </div>
            </div>
        </div>
    </main>
    <Footer></Footer>
    </>
  )
}

export default ProductPage