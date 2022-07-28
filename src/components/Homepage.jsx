import React from 'react'
import '../styles/Homepage.css'
import ProductCard from './ProductCard'
import { getData } from '../DAL/api'
import { useState, useEffect } from 'react'
import categories from "../DAL/categories.json"
import Category from './Category'

function Homepage() {
    const [products, setProducts] = useState([])
    // console.log(categories)
    useEffect(() => {
        getData().then(setProducts)
    }, [])
    async function sortByCategory(category, subCategory) {
        console.log(category, subCategory)
        const prods = await getData()
        setProducts(prods.filter(product => product.category === category && product.brand === subCategory))
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
                Hero
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
                    <input type="radio" name="sort" id="oldest" onClick={() => sortProducts('published', -1)} />
                    <label htmlFor='oldest'>Oldest product</label>
                </div>

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
                        : (<h1>loading...</h1>)}
                </main>
            </section>
        </>
    )
}

export default Homepage

