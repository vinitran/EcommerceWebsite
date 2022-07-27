import React from 'react'
import '../css/Home.css'
import Navbar from './Navbar'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Products } from './Products'

const SlideImage = () => {
    return (
        <>
            <div className="wrapper-slide">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/poster1.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/poster2.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/poster3.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}
export const Home = () => {
    return (
        <div className="wrapper">
            <Navbar />
            <div>
                <SlideImage />
                <Products />
            </div>

        </div>
    )
}
