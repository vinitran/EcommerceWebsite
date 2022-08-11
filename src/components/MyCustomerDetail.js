import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import '../css/Cart.css';
import '../css/MyCustomerDetail.css';
import smartphone_card from '../data/smartphone_data.js'

const ProductCartItem = (props) => {
    const [item, setItem] = useState(props.product);


    return (
        item != null ?
            <div className="cart_box">
                <div className="left-side">
                    <div className="cart_img">
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
                        <div className="amount-item ">Amount: {item.amount}</div>
                    </div>
                    <div className="total-payment-product">{item.amount * item.price}$</div>
                </div>
            </div>
            :
            null
    )
}
const MyCustomerDetail = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    return (
        <div className="container-cart">
            <Navbar />
            <div className="wrapper-cart">
                {
                    smartphone_card.map((item) =>
                        <ProductCartItem
                            product={item}
                        />
                    )
                }
                <div className="total-price">
                    <div className="total-price-text">Total: ${totalPrice}</div>
                </div>
            </div>
        </div>
    );
};

export default MyCustomerDetail;