
export async function getProducts() {
    try {
        const src = '/src/utils/data.json'
        const response = await fetch(src)
        const data: Product[] = await response.json()
        const products = data.map((product, index) => ({
            ...product,
            id: index,
            price: parseFloat(product.price).toFixed(2),
            quantity: 0,
        }))
        return products
    } catch (error) {
        console.error((error as Error).message)
        return null
    }
}