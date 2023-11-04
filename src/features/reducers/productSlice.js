import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'



export const productSlice = createSlice({
    name: 'product',
    initialState: {
      products: [] // state.products
    },
    reducers: {
      setAllProducts: (state, {type, payload}) => {
        return {...state, products: payload}
      },
      selectProduct: (state, {type, payload}) => {
        return {...state, ...payload}
      },
      cleanupProduct: (state, {type, payload}) => {
        return {}
      }
    }
  })

export const { setAllProducts, selectProduct, cleanupProduct } = productSlice.actions
