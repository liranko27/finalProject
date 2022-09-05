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
}