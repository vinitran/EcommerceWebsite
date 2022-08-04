import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import '../css/Cart.css';
import { handleGetCartInfoApi } from '../services/cartService';
import { handleUpdateCartApi } from '../services/cartService';
let getCartInfo = async () => {
    let {cartInfo}  = await handleGetCartInfoApi(3)
    return cartInfo
  }
const ProductCartItem = (props) => {
    const [item, setItem] = useState(props.product);
    console.log(props.totalPrice)

    const addQuantity = () => {
        item.quantity += 1;
        setItem({
            ...item,
            quantity: item.quantity
        })
        updateCart(item);
        props.setTotalPrice(props.totalPrice + item.price)
    }
    const reduceQuantity = () => {
        if (item.quantity > 0) {
            item.quantity -= 1;
            setItem({
                ...item,
                quantity: item.quantity
            })
            updateCart(item);
            props.setTotalPrice(props.totalPrice - item.price)
        }
    }
    
        let updateCart = async (data) => {
            console.log(data)
        await handleUpdateCartApi(data)
            
          //console.log(cartInfo);
            //props.isGetCart = false
            //console.log(isGetCart)
          //setCart(cartInfo.cart)
        }
        //console.log(props.totalPrice)

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
                        <button className="button" onClick={() => reduceQuantity()}>-</button>
                        <div className="wrapper-item quantity">{item.quantity}</div>
                        <button className="button" onClick={() => addQuantity()}>+</button>
                    </div>
                    <div className="last-price">{item.quantity * item.price}$</div>
                    <button className="button">Remove</button>
                </div>
            </div>
            :
            null
    )
}

const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [cart, setCart] = useState([])
    //const [isGetCart, setIsGetCart] = useState(false);
    let getCartInfo = async () => {
        let {cartInfo}  = await handleGetCartInfoApi(3)
        //console.log(cartInfo);
          //setIsGetCart(true)
          //console.log(cartInfo.totalPrice[0].totalPrice)
          setTotalPrice(cartInfo.totalPrice[0].totalPrice)
        setCart(cartInfo.cart)
      }
    useEffect(() => {
       // console.log(isGetCart)
        //setIsGetCart(false)
        //if(!isGetCart) {
            getCartInfo();
      
    //}
        }, []);
        
    console.log(cart)
    return (
        <div className="container-cart">
            <Navbar />
            <div className="wrapper-cart">
            {
                cart.map((item) =>
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

export default Cart;