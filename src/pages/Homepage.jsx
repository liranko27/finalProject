import React from 'react'
import '../styles/Homepage.css'
import ProductCard from '../components/ProductCard'
import { Api, getData } from '../DAL/api'
import { useState, useEffect } from 'react'
import categories from "../DAL/categories.json"
import Category from '../components/Category'
import Slider from '../features/Slider'
import Spin from '../features/Spin'

function Homepage() {
    const [products, setProducts] = useState([])
    const [images, setImages] = useState([])
    useEffect(() => {
        Api.getAllProducts().then(setProducts)
        Api.getAllPhotos().then(setImages)
    }, [])
    async function sortByCategory(category, subCategory) {
        setProducts([])
        // const prods = await Api.getAllProducts()
        Api.getAllProducts().then((prods) => setProducts(prods.filter(product => product.category === category && product.brand === subCategory)))

    }
    function sortProducts(key, dir) {
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
                <Slider images={images} />
            </section>
            <div className="sort">
                <div>
                    <span>Sory By:</span>
                </div>
                <div>
                    <input type="radio" name="sort" id="LTH" onClick={() => sortProducts('unitPrice', -1)} />
                    <label htmlFor='LTH'>Price Low to high</label>
                    <input type="radio" name="sort" id="HTL" onClick={() => sortProducts('unitPrice', 1)} />
                    <label htmlFor='HTL'>Price High to low</label>
                </div>
                <div>
                    <input type="radio" name="sort" id="newest" onClick={() => sortProducts('published', 1)} />
                    <label htmlFor='newest'>Newest product</label>

                </div>

                <input type="radio" name="sort" id="all" onClick={() => {
                    setProducts([])
                    Api.getAllProducts().then(setProducts)
                }} />
                <label htmlFor='all'>Get all product</label>
            </div>
            <section className="my-container">
                <aside>
                    {categories.map(sub => {
                        return <Category key={sub.id} sort={sortByCategory} title={sub.categoryName} subCategories={sub.subCategories} />
                    })}
                </aside>
                <main>
                    {products.length !== 0 ? (<section className="products">
                        {products.map(prod => <ProductCard key={(prod.id + 1).toString()} amount={prod.unitInStock} product={prod} />)}
                    </section>)
                        : <Spin />}
                </main>
            </section>
        </>
    )
}

export default Homepage

