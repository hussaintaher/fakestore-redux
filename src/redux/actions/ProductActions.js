import {actionTypes} from '../constants/productConstants'

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectProduct = (product) => {
    return {
        type: actionTypes.SELECT_PRODUCT,
        payload: product,
    }
}

// cleanup to fix the state while routing to other products
export const cleanupProduct = (product) => {
    return {
        type: actionTypes.DELETE_PRODUCT,
        payload: {},
    }
}