import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/Homepage.css'
import ProductCard from './ProductCard'
function Homepage() {

    return (
        <>
            {/* <Navbar /> */}
            <section class="hero">
                Hero
            </section>
            <div className="sort">
                <span>Sory By:</span>
                <input type="radio" name="sort" id="LTH" />
                <label htmlFor='LTH'>Low to high</label>
                <input type="radio" name="sort" id="HTL" />
                <label htmlFor='HTL'>High to low</label>
                <input type="radio" name="sort" id="newest" />
                <label htmlFor='newest'>Newest product</label>
                <input type="radio" name="sort" id="oldest" />
                <label htmlFor='oldest'>Oldest product</label>
            </div>
            <section className="container">
                <aside>
                    <h3 className="category_heading">Category</h3>
                    <div className="sub_categories">
                        <p>sub category</p>
                        <p>sub category</p>
                        <p>sub category</p>
                        <p>sub category</p>
                    </div>
                    <h3 className="category_heading">Category</h3>
                    <div className="sub_categories">
                        <p>sub category</p>
                        <p>sub category</p>
                        <p>sub category</p>
                        <p>sub category</p>
                    </div>
                    <h3 className="category_heading">Category</h3>
                    <div className="sub_categories">
                        <p>sub category</p>
                        <p>sub category</p>
                        <p>sub category</p>
                        <p>sub category</p>
                    </div>

                </aside>
                <main>
                    <section className="products">
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
            {/* <Footer className='footer' /> */}
        </>
    )
}

export default Homepage