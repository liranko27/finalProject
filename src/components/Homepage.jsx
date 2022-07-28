import React from 'react'
import '../styles/Homepage.css'
import ProductCard from './ProductCard'
import { getData } from '../DAL/api'
import { useState, useEffect } from 'react'
function Homepage() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getData().then(setProducts)
    }, [])

    return (
        <>
            <section className="hero">
                Hero
            </section>
            <div className="sort">
                <div>
                    <span>Sory By:</span>
                </div>
                <div>
                    <input type="radio" name="sort" id="LTH" />
                    <label htmlFor='LTH'>Low to high</label>
                    <input type="radio" name="sort" id="HTL" />
                    <label htmlFor='HTL'>High to low</label>
                </div>
                <div>
                    <input type="radio" name="sort" id="newest" />
                    <label htmlFor='newest'>Newest product</label>
                    <input type="radio" name="sort" id="oldest" />
                    <label htmlFor='oldest'>Oldest product</label>
                </div>

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
                    {products.length !== 0 ? (<section className="products">
                        {products.map(prod => <ProductCard key={prod.id} amount={prod.unitInStock} product={prod} />)}
                    </section>) : (<h1>loading...</h1>)}
                </main>
            </section>
        </>
    )
}

export default Homepage

