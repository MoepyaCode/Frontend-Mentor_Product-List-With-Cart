export function getUpdatedCartProducts(products: Product[]) {
    return products.filter(products => products.quantity > 0)
}

export function getCartTotalPrice(products: Product[]) {
    return products.reduce((total, product) => {
        return total + parseFloat(product.total)
    }, 0).toFixed(2)
}