import React from 'react'
import '../css/Home.css'
import Navbar from './Navbar'
import { Products } from './Products'
import { SlideImage } from "./SlideImage"
import SlideImageHome from '../data/SlideImages.js';
import smartphone_card from '../data/smartphone_data.js'

export const Home = () => {
    
    return (
        <div className="wrapper">
            <Navbar />
            <div>
                <SlideImage image = {SlideImageHome} />
                <Products product = {smartphone_card}/>
            </div>
        </div>
    )
}
