import React from 'react'
import { Link } from 'react-router-dom'
import '../css/ProductItem.css'
export const ProductItem = (props) => {
   //console.log(props.product);
  return (
      props.product ?
        <Link to={`/${props.product.product_id}`} className="link">
          <div className="product-card">
            <div className="card_img">
              <img src={props.product.thumb} />
            </div>
            <div className="card_header">
              <h1>{props.product.product_name}</h1>
              <h2>{props.product.description}</h2>
              <p className="price">{props.product.price}$</p>
              <div className="button">Add to cart</div>
            </div>
          </div>
        </Link>
        : null

  )
}
