import { combineReducers } from 'redux'
import { setProductsReducer, selectProdectReducer } from './ProductReducers'


export default combineReducers({
    allProducts: setProductsReducer,
    product: selectProdectReducer,
})