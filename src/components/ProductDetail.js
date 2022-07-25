import React from 'react'
import Navbar from './Navbar'
import { useParams } from "react-router-dom";
import smartphone_card from '../data/smartphone_data.js'
import '../css/ProductDetail.css'

export const ProductDetail = () => {
  const params = useParams();
  function checkId(item) {
    return item.id == params.id;
  }
  const item = smartphone_card.filter(item => checkId(item))[0];
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
