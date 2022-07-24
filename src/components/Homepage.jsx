import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/Homepage.css'
import ProductCard from './ProductCard'
function Homepage() {
    return (
        <>
            <Navbar />
            <section class="hero">
                Hero
            </section>
            <section class="container">
                <aside>
                    <h3 class="category_heading">Category</h3>
                    <div class="sub_categories">
                        <p>sub category</p>
                        <p>sub category</p>
                        <p>sub category</p>
                        <p>sub category</p>
                    </div>
                    <h3 class="category_heading">Category</h3>
                    <div class="sub_categories">
                        <p>sub category</p>
                        <p>sub category</p>
                        <p>sub category</p>
                        <p>sub category</p>
                    </div>
                    <h3 class="category_heading">Category</h3>
                    <div class="sub_categories">
                        <p>sub category</p>
                        <p>sub category</p>
                        <p>sub category</p>
                        <p>sub category</p>
                    </div>

                </aside>
                <main>
                    <section class="products">
                        <ProductCard amount={12} />
                        <ProductCard amount={0} />
                        <ProductCard amount={5} />
                        <ProductCard amount={8} />
                        <ProductCard amount={0} />
                        <ProductCard amount={11} />
                        <ProductCard amount={9} />
                        <ProductCard amount={0} />
                    </section>
                </main>
            </section>
            <Footer className='footer' />
        </>
    )
}

export default Homepage