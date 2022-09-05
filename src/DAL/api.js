import data from './productsData.json'


export function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })
}


export class Api {
    static async getProduct(id) {
        const resp = await fetch(`http://localhost:5001/product/${id}`)
        const data = await resp.json()
        return data
    }
    static async getAllProducts() {
        const resp = await fetch(`http://localhost:5001/product`)
        const data = await resp.json()
        return data
    }
    static async getAllPhotos() {
        const resp = await fetch(`http://localhost:5001/images`)
        const data = await resp.json()
        return data
    }
    static async getPhotos(id) {
        const resp = await fetch(`http://localhost:5001/images/${id}`)
        const data = await resp.json()
        return data
    }
    static async login(user) {
        const resp = await fetch('http://localhost:5001/login',
            {
                credentials: 'include',
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            })
        const data = await resp.json()
        return data
    }
    static async checkCookie() {
        const resp = await fetch('http://localhost:5001/login/check', { credentials: 'include' })
        const data = await resp.json()
        return data
    }
    static async register(newCustomer) {
        const customerInit = { ...newCustomer, id: 2, city: "", address: "", phone: "", zip_code: 1 }
        delete customerInit.confirmPassword
        const resp = await fetch('http://localhost:5001/login/register',
            {
                credentials: 'include',
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(customerInit)
            }

        )
        const data = await resp.json()
        return data
    }
    static async getWishlist() {
        const resp = await fetch('http://localhost:5001/wishlist', { credentials: 'include' })
        const data = await resp.json()
        return data
    }
    static async addWishlist(product) {
        const resp = await fetch('http://localhost:5001/wishlist', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: 'include',
            body: JSON.stringify(product)
        })
        const data = await resp.json()
        return data
    }
    static async removeFromWishlist(product) {
        console.log(product)
        const resp = await fetch('http://localhost:5001/wishlist', {
            credentials: 'include',
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        })
        const data = await resp.json()
        return data
    }
}