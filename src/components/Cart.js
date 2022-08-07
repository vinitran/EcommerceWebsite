import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import '../css/Cart.css';
import { handleGetCartInfoApi, handleUpdateCartApi, handleRemoveProductApi } from '../services/cartService';


const ProductCartItem = (props) => {
    const [item, setItem] = useState(props.product);

    //console.log(props.totalPrice)
    //console.log(item.quantity)

    //console.log(items)
    const addQuantity = () => {
        item.quantity += 1;
        setItem({
            ...item,
            quantity: item.quantity
        })
        //updateCart(item);
        update();
        props.setTotalPrice(props.totalPrice + item.price)
    }

    const reduceQuantity = () => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            setItem({
                ...item,
                quantity: item.quantity
            })
            update();
            props.setTotalPrice(props.totalPrice - item.price)
        } else {
            removeProduct(item.product_id)
        }

    }
    //console.log(props.cart, item.quantity)
    const update = () => {
        const updatedCart = props.cart.map(product => {
            //console.log(product.product_id, item.quantity)
            if (product.product_id === item.product_id && product.quantity !== item.quantity) {
                return { ...product, quantity: item.quantity }
            } else {
                return product;
            }
        })
        props.setCart(updatedCart);
       
    }
         
 
    const removeProduct = async (product_id, user_id) => {
        console.log(product_id)
        const updatedCart = props.cart.filter(product => {
            return product.product_id !== item.product_id
        })
        props.setTotalPrice(props.totalPrice - item.price*item.quantity)
        props.setCart(updatedCart);
        await handleRemoveProductApi(product_id, 3);
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
                   
                    <button className="button" onClick={() => removeProduct(item.product_id)}>Remove</button>
                </div>
            </div>
            :
            null
    )
}

const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [cart, setCart] = useState([])

    useEffect(() => {
        let getCartInfo = async () => {
            let { cartInfo } = await handleGetCartInfoApi(3)
            setTotalPrice(cartInfo.totalPrice[0].totalPrice)
            setCart(cartInfo.cart)
        }
        getCartInfo();
        console.log(cart)
        //}
    }, [cart.length]);
    //console.log(cart.length)
    let updateCart = async (data) => {
        console.log(data)
        await handleUpdateCartApi(data)

    }



    
    return (
        <div className="container-cart">
            <Navbar />
            <div className="wrapper-cart">
                {
                    cart.map((item) =>
                        <ProductCartItem
                            key={item.product_id}
                            product={item}
                            setTotalPrice={setTotalPrice}
                            totalPrice={totalPrice}
                            setCart={setCart}
                            cart={cart}
                           
                        />
                    )
                }
                <div className="total-price">
                    <div>Total: ${totalPrice}</div>
                    <button className="button-payment" onClick={() => { updateCart(cart) }}>Payment</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;