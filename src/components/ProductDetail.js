import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useParams } from "react-router-dom";
import '../css/ProductDetail.css'
import { handleGetProductInfoApi } from '../services/productService'


export const ProductDetail = () => {
  const [item, setItem] = useState('');
  const { product_id } = useParams();
  //fail do promise
  useEffect(() => {
  let getProductInfo = async () => {
    console.log(product_id)
    let data  = await handleGetProductInfoApi(product_id);
    //console.log(product);
    setItem(data.product[0])
  }
getProductInfo();
  }, [])
  //getProductInfo();

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
