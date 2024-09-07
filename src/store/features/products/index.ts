import { getTotalPrice } from "@app-hooks"
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
        resetProductQuantity(state, action: PayloadAction<number>) {
            const product = state.products?.find((product) => product.id === action.payload)
            if (product) {
                product.quantity = 0
                product.total = '0.00'
            }
        },
        incrementProductQuantity(state, action: PayloadAction<number>) {
            const product = state.products?.find((product) => product.id === action.payload)
            if (product) {
                product.quantity += 1
                product.total = getTotalPrice(product.quantity, product.price)
            }
        },
        decrementProductQuantity(state, action: PayloadAction<number>) {
            const product = state.products?.find((product) => product.id === action.payload)
            if (product) {
                product.quantity -= 1
                product.total = getTotalPrice(product.quantity, product.price)
            }
        },
    },
})

export const { 
    setProducts, 
    resetProductQuantity,
    incrementProductQuantity, 
    decrementProductQuantity 
} = productsSlice.actions

export default productsSlice.reducer