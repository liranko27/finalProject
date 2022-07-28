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
    console.log(products)
    function sortByPrice(key, dir) {
        setProducts([...products.sort((a, b) => {
            if (a[key] > b[key]) {
                return -1 * dir
            }
            else if (a[key] < b[key]) {
                return 1 * dir
            }
            else {
                return 1
            }
        })])
    }

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
                    <input type="radio" name="sort" id="LTH" onClick={() => sortByPrice('unitPrice', -1)} />
                    <label htmlFor='LTH'>Low to high</label>
                    <input type="radio" name="sort" id="HTL" onClick={() => sortByPrice('unitPrice', 1)} />
                    <label htmlFor='HTL'>High to low</label>
                </div>
                <div>
                    <input type="radio" name="sort" id="newest" onClick={() => sortByPrice('published', 1)} />
                    <label htmlFor='newest'>Newest product</label>
                    <input type="radio" name="sort" id="oldest" onClick={() => sortByPrice('published', -1)} />
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
                        {products.map(prod => <ProductCard key={(prod.id + 1).toString()} amount={prod.unitInStock} product={prod} />)}
                    </section>)
                        : (<h1>loading...</h1>)}
                </main>
            </section>
        </>
    )
}

export default Homepage

