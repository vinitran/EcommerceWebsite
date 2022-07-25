import React, { useState } from 'react'
import Navbar from './Navbar';
import '../css/Common.css';


const Cart = () => {

    return (
        <div className="cart_box">
            <div className="cart_img">
                <img src="./images/1.png" alt="" />
                <p>"Rayes Alpha"</p>
            </div>
            {/* <div>
                <button onClick={() => handleChange(item, 1)}>+</button>
                <button>{item.amount}</button>
                <button onClick={() => handleChange(item, -1)}>-</button>
            </div> */}
            <div>
                <span>$999</span>
                {/* <button onClick={() => handleRemove(item.id)}>Remove</button> */}
            </div>
        </div>
    );
};

export default Cart;