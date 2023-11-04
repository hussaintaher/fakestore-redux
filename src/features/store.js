import { configureStore } from '@reduxjs/toolkit'
import {productSlice} from './reducers/productSlice'

export const store = configureStore({
    reducer: productSlice.reducer
})

// Can still subscribe to the store
//store.subscribe(() => console.log(store.getState()))