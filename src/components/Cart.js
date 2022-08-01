import React, { useState } from 'react'
import Navbar from './Navbar';
import '../css/Cart.css';

const ProductCartItem = () => {
    return (
        <>
            <div className="cart_box">
                <div className="left-side">
                    <div className="cart_img">
                        <img src="./images/1.png" alt="" />
                    </div>
                    <div className="wrapper-item">
                        <div className="name">Rayes Alpha</div>
                    </div>
                    <div className="wrapper-item">
                        <div className="price">Price: $999</div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="btn-group">
                        <button>+</button>
                        <div className="wrapper-item amount">1</div>
                        <button>-</button>
                    </div>
                    <div className="last-price">999$</div>
                    <button>remove</button>
                </div>
            </div>
        </>
    )
}
const Cart = () => {
    return (
        <div className="container-cart">
            <Navbar />
            <ProductCartItem />
            <ProductCartItem />
            <ProductCartItem />
            <ProductCartItem />
            <ProductCartItem />
            <ProductCartItem />
            <div className="total-price">
                <div>Total: $199999</div>
                <button>payment</button>
                </div>
        </div>
    );
};

export default Cart;