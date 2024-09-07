import { getCartTotalPrice } from "@app-hooks/cart"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: CartState = {
    products: [],
    total: '0.00'
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateProductsInCart(state, action: PayloadAction<Product[]>) {
            state.products = action.payload
            state.total = getCartTotalPrice(state.products)
        }
    }
})

export const { updateProductsInCart } = cartSlice.actions
export default cartSlice.reducer