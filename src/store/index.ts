import { configureStore } from '@reduxjs/toolkit';
import ProductsReducer from './features';
import logger from 'redux-logger';

const store = configureStore({
    reducer: {
        products: ProductsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store
export type AppStore = typeof store
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']