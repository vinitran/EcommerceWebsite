import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import '../css/ProductSell.css';
import smartphone_card from '../data/smartphone_data.js'

const ProductCartItem = (props) => {
    const [item, setItem] = useState(props.product);
    const addAmount = () => {
        let amount = item.amount + 1;
        setItem({
            ...item,
            amount: amount
        })
        props.setTotalPrice(props.totalPrice + item.price)
    }
    const reduceAmount = () => {
        if (item.amount > 0) {
            let amount = item.amount - 1;
            setItem({
                ...item,
                amount: amount
            })
        }
        props.setTotalPrice(props.totalPrice - item.price)
    }

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
                        <button className="button" onClick={() => reduceAmount()}>-</button>
                        <div className="wrapper-item amount">{item.amount}</div>
                        <button className="button" onClick={() => addAmount()}>+</button>
                    </div>
                    <div className="last-price">{item.amount * item.price}$</div>
                    <button className="button">Remove</button>
                </div>
            </div>
            :
            null
    )
}
const ProductSell = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    return (
        <div className="container-cart">
            <Navbar />
            <div className="wrapper-cart">
                {
                    smartphone_card.map((item) =>
                        <ProductCartItem
                            product={item}
                            setTotalPrice={setTotalPrice}
                            totalPrice={totalPrice}
                        />
                    )
                }
                <div className="total-price">
                    <div>Total: ${totalPrice}</div>
                    <button className="button-payment">Payment</button>
                </div>
            </div>
        </div>
    );
};

export default ProductSell;