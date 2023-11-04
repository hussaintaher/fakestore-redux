import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { selectProduct, cleanupProduct, setAllProducts } from '../features/reducers/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetails = () => {
  const product = useSelector((state) => state)
  const dispatch  = useDispatch()
  const { productId } = useParams();
  console.log(product)

  const {image, title, price, category, description} = product

  const fetchProduct = async (productId) => {
    const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    .catch(err => (console.log(err)))  
    dispatch(selectProduct(res.data))
  }

  useEffect(() => {
    fetchProduct();
    if (productId && productId !== "") fetchProduct(productId);
    return () => {
      dispatch(cleanupProduct())
    }
  }, [productId])


  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  )
}

export default ProductDetails