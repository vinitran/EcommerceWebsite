import React from 'react'
import '../css/Home.css'
import Navbar from './Navbar'
import { Products } from './Products'
import smartphone_card from '../data/smartphone_data.js'

export const Search = () => {
    
    return (
        <div className="wrapper">
            <Navbar />
            <div>
                <Products product = {smartphone_card}/>
            </div>
        </div>
    )
}
