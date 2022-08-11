import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar';
import '../css/MyCustomers.css';
import smartphone_card from '../data/smartphone_data.js'

const SellProductCart = (props) => {
    const [item, setItem] = useState(props.product);
    const DeleteCommit = () => {
        console.log("a");
    };
    return (
        item != null ?
            <Link to={`/mycustomers/detail/${item.order_id}`} className="link">
                <div className="cart-box">
                    <div className="left-side">
                        <div className="order-id">
                            <div>
                                Id: {item.order_id}
                            </div>
                        </div>
                        <div className="buyer">
                            <div>{item.name}</div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="payment">
                            <div>Total: ${item.payment}</div>
                        </div>
                        <div className="amount">
                            <div>Amount product: {item.amount_product}</div>
                        </div>
                    </div>
                </div>
            </Link >
            :
            null
    )
}
const MyCustomers = () => {
    const [buyers, setBuyers] = useState([
        {
            name: "Tran Thanh Vinh",
            amount_product: 2,
            payment: 999,
            order_id: 123
        }, {
            name: "Tran Thanh Vinh",
            amount_product: 2,
            payment: 999,
            order_id: 123
        }, {
            name: "Tran Thanh Vinh",
            amount_product: 2,
            payment: 999,
            order_id: 123
        }
    ]
    );
    return (
        <div className="container-cart">
            <Navbar />
            <div className="wrapper-card">
                <div className="title">My Customers</div>
                <div className="wrapper-sell-product">
                    {
                        buyers.map((item) =>
                            <SellProductCart
                                product={item}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MyCustomers;