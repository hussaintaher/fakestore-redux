import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/ProductActions";
import ProductLists from "./ProductLists";

const ProductComponent = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.allProducts.products)
    
    const fetchAllProducts = async () => {
      const res = await axios.get('https://fakestoreapi.com/products')
      .catch(err => (console.log(err)))  
      dispatch(setProducts(res.data))
    }

    useEffect(() => {
      fetchAllProducts()
    }, [])

    const renderList = products.map((product) => {
      const {id, title, image, price} = product

      return (
        <div className="four wide column" key={id}>
            <Link to={`product/${id}`}>
              <div className="ui link cards">
                <div className="card">
                  <div className="image">
                    <img src={image} alt={''} />
                  </div>
                  <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta price">{price}</div>
                    <div className="meta"></div>
                  </div>
                </div>
              </div>
            </Link>
            
          </div>
      );

    })

    return <>{renderList}</>
    
};

export default ProductComponent;