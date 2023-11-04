import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setAllProducts, cleanupProduct} from '../features/reducers/productSlice'
import axios from "axios";

const ProductComponent = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)
  console.log(products)

  const fetchAllProducts = async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    .catch(err => (console.log(err)))  
    dispatch(setAllProducts(res.data))
  }

  useEffect(() => {
    fetchAllProducts()

  }, [])

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">
      {products ? products.map((product) => (
        <div className="four wide column" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div className="ui link cards">
                <div className="card">
                  <div className="image">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="content">
                    <div className="header">{product.title}</div>
                    <div className="meta price">$ {product.price}</div>
                    <div className="meta">{product.category}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
      )) : (<div>Loading</div>)}
    </div>
  );
}

export default ProductComponent;