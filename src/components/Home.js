import React, { useEffect, useState } from 'react'
import '../css/Home.css'
import Navbar from './Navbar'
import { Products } from './Products'
import { useSelector, useDispatch } from 'react-redux'
import { SlideImage } from "./SlideImage"
import SlideImageHome from '../data/SlideImages.js';
import { handleGetAllProductsApi } from '../services/productService'

export const Home = () => {
    const [products, setProducts] = useState([]);
    const [errMessage, setErrMessage] = useState('');
  //fail do promise
  useEffect(() => {
     async function getData() {
      let smartphone_card = await handleGetAllProductsApi();
      //console.log(smartphone_card)
      try {
        if (smartphone_card.products && smartphone_card. errCode !== 0) {
          setErrMessage(smartphone_card.message)
        }
        if (smartphone_card && smartphone_card.errCode === 0) {
          setProducts(smartphone_card.products);
    
        }
    
      } catch (e) {
        if (e.response) {
          if (e.response.smartphone_card) {
            setErrMessage(e.response.smartphone_card.message)
          }
        }
        console.log('error message', e.response);
      }
      
    }
    getData();
  }, [])
    
    return (
        <div className="wrapper">
            <Navbar />
            <div>
                <SlideImage image = {SlideImageHome} />
                <Products product = {products}/>
            </div>
        </div>
    )
}
