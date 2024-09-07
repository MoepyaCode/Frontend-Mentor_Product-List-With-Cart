import { configureStore } from '@reduxjs/toolkit';
import ProductsReducer from './features/products';
import CartReducer from './features/cart';
import logger from 'redux-logger';

const store = configureStore({
    reducer: {
        products: ProductsReducer,
        cart: CartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store
export type AppStore = typeof store
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']