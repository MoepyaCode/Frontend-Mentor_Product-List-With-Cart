import axios from "axios"

export async function getProducts(): Promise<Product[] | null> {
    try {
        const src = '/data/data.json'
        let products = await axios.get(src)
        const productsModified = products.data.map((product: Product, index: number) => {
            return {
                ...product,
                id: index,
                price: parseFloat(product.price).toFixed(2),
                quantity: 0,
                total: '0.00'
            }
        })
        return productsModified
    } catch (error) {
        console.error((error as Error).message)
        return null
    }
}