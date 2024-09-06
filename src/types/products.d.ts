declare interface Image {
    desktop: string
    mobile: string
    tablet: string
    thumbnail: string
}

declare interface Product {
    id: number
    category: string
    image: Image
    name: string
    price: string
    quantity: number
}

declare interface ProductsState {
    products: Product[] | null
}