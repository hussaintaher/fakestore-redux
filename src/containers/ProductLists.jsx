import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import {setAllProducts} from '../features/reducers/productSlice'
import axios from "axios";

const ProductLists = () => {

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  )
}

export default ProductLists