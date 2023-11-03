import { actionTypes } from "../constants/productConstants";

const initialState = {
    products: [],
}

export const setProductsReducer = ( state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return {...state, products: payload}
        default:
            return state
    }
};

export const selectProdectReducer = ( state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.SELECT_PRODUCT:
            return {...state, ...payload}
        case actionTypes.DELETE_PRODUCT:
            return {}
        default:
            return state
    }
};