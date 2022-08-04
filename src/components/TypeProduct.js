import React from 'react'
import '../css/Home.css'
import Navbar from './Navbar'
import { Products } from './Products'
import { useSelector, useDispatch } from 'react-redux'
import { SlideImage } from "./SlideImage"
import SlideImageHome from '../data/SlideImages.js';
import smartphone_card from '../data/smartphone_data.js'
import { useParams } from "react-router-dom";

export const TypeProduct = () => {
  const params = useParams();
    return (
        <div className="wrapper">
            <Navbar />
            <div>
                <SlideImage image={SlideImageHome} />
                <Products product={smartphone_card} />
            </div>
        </div>
    )
}
