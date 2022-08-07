import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import SlideImageHome from '../data/SlideImages.js';


export const SlideImage = (props) => {
  return (
    <>
      <div className="wrapper-slide">
        <Carousel>
          {props.image.map((product) =>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={product.url}
                alt="First slide"
              />
            </Carousel.Item>
          )}
        </Carousel>
      </div>
    </>
  )
}
