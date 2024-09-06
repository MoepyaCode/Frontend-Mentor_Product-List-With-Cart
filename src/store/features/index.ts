import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"

const initialState: ProductsState = {
    products: null,
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<Product[] | null>) {
            state.products = action.payload
        },
        addProductToCart(state, action: PayloadAction<number>) {
            const product = state.products?.find((product) => product.id === action.payload)
            if (product) {
                product.quantity += 1
            }
        },
        removeProductFromCart(state, action: PayloadAction<number>) {
            const product = state.products?.find((product) => product.id === action.payload)
            if (product) {
                product.quantity = 0
            }
        },
        incrementProductQuantity(state, action: PayloadAction<number>) {
            const product = state.products?.find((product) => product.id === action.payload)
            if (product) {
                product.quantity += 1
            }
        },
        decrementProductQuantity(state, action: PayloadAction<number>) {
            const product = state.products?.find((product) => product.id === action.payload)
            if (product) {
                product.quantity -= 1
            }
        },
    },
})

export const { 
    setProducts, 
    addProductToCart, 
    removeProductFromCart, 
    incrementProductQuantity, 
    decrementProductQuantity 
} = productsSlice.actions

export default productsSlice.reducer