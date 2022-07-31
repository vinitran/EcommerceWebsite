
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useParams } from "react-router-dom";
//import smartphone_card from '../data/smartphone_data.js'
import '../css/ProductDetail.css'
import { handleGetAllProductsApi } from '../services/productService'

export const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  
  //fail do promise
  useEffect(() => {
     async function getData() {
      let smartphone_card = await handleGetAllProductsApi();
      setProducts(smartphone_card.products);
    }
    getData();
  }, [])
  console.log(products)
  const params = useParams();
  function checkId(item) {
    return item.product_id === params.product_id;
  }
  const item = products.filter(item => checkId(item))[0];
  console.log(item);

  return (
    <div className="wrapper">
      <Navbar />
      <div className="container">
        <div className="details" >
          <div className="big-img">
            <img src={item.thumb} alt="abc" />
          </div>
          <div className="box">
            <div className="row">
              <h2 className="name">{item.product_name}</h2>
              <span className="price">${item.price}</span>
            </div>
            <p className="description">{item.description}</p>
            <button className="button">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
