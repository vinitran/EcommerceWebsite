import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar';
import '../css/ProductSell.css';
import smartphone_card from '../data/smartphone_data.js'

const ProductCartItem = (props) => {
    const [item, setItem] = useState(props.product);
    const DeleteCommit = () => {
        console.log("a");
    };
    return (
        item != null ?
            <Link to={`/mysellingproduct/${item.id}`} className="link">
                <div className="cart-box">
                    <div className="left-side">
                        <div className="cart-img">
                            <img src={item.thumb} alt="" />
                        </div>
                        <div className="wrapper-item">
                            <div className="name">{item.product_name}</div>
                        </div>
                        <div className="wrapper-item">
                            <div className="price">${item.price}</div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="btn-group">
                            <div className="wrapper-item amount">Amount: {item.amount}</div>
                        </div>
                    </div>
                </div>
            </Link>
            :
            null
    )
}
const ProductSell = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    return (
        <div className="container-cart">
            <Navbar />
            <div className="wrapper-card">
                <div className="title">My Product</div>
                {
                    smartphone_card.map((item) =>
                        <ProductCartItem
                            product={item}
                            setTotalPrice={setTotalPrice}
                            totalPrice={totalPrice}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default ProductSell;