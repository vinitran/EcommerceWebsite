import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../css/ProductItem.css'
export const ProductItem = (props) => {
  // console.log(props.product);
  return (
    props.product ?
      <Link to={`/product/${props.product.id}`} className="wrapper-product-item">
        <div className="product-card">
          <div className="card_img">
            <img src={props.product.thumb} />
          </div>
          <div className="card_header">
            <h1>{props.product.product_name}</h1>
            <h2>Smartphone</h2>
            <p className="price">{props.product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
            <button className="button">
              <div className="inline">
                <FontAwesomeIcon icon={faCartShopping} className="icon" />
                <div>Add to cart</div>
              </div>
            </button>
          </div>
        </div>
      </Link>
      : null

  )
}
