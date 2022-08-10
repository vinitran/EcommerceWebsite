import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCreditCard, faBars } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar'
import { Navigate, useParams, useNavigate } from "react-router-dom";
import smartphone_card from '../data/smartphone_data.js'


import '../css/ProductDetail.css'

export const ProductDetail = () => {
  const params = useParams();
  let navigate = useNavigate();
  function checkId(item) {
    return item.id == params.id;
  }
  const BuyNowCommit = (e) => {
    navigate("/cart");
  }
  const item = smartphone_card.filter(item => checkId(item))[0];
  const image = [
    {
      id: 1,
      url: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MM2X3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1630622653000",
    },
    {
      id: 2,
      url: "https://dlcdnwebimgs.asus.com/gain/de9b7594-6143-4370-a14c-7220ac3b08c6/",
    },
    {
      id: 3,
      url: "https://dlcdnwebimgs.asus.com/gain/de9b7594-6143-4370-a14c-7220ac3b08c6/",
    }
  ];
  return (
    <div className="wrapper">
      <Navbar />
      <div className="container">
        <div className="details" >
          <div className="big-img">
            <Carousel>
              {image.map((product) =>
                <Carousel.Item>
                  <img
                    className="d-block w-100 image"
                    src={product.url}
                    alt="First slide"
                  />
                </Carousel.Item>
              )}
            </Carousel>
            {/* <img src={item.thumb} alt="abc" /> */}
          </div>
          <div className="box">
            <div className="top">
              <div className="name">{item.product_name}</div>
              <div className="type">Smartphone</div>
              <div className="inLine selled">
                <div className="shop inLine">
                  <div>Selled by</div>
                  <div className="shop-name">Vini shop</div>
                </div>
                <div className="product-avaiable inLine">
                  <div className="available-quantity">200</div>
                  <div>products available</div>

                </div>
              </div>
            </div>
            <div className="middle-time">
              <div className="timeselling">Posted in August 25, 2022 at 5:08pm</div>
            </div>
            <div className="middle-price">
              <div className="price-text">Current Price</div>
              <div className="price">$999</div>
              <div className="inLine button-group">
                <button className="inLine">
                  <FontAwesomeIcon icon={faCartShopping} className="icon" />
                  <div>Add to cart</div>
                </button>
                <button className="inLine" onClick={(e) =>
                  <div class="alert alert-primary" role="alert">
                    This is a primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
                  </div>
                }>
                  <FontAwesomeIcon icon={faCreditCard} className="icon" />
                  <div>Buy now</div>
                </button>
              </div>

            </div>

          </div>
        </div>
        <div className="wrapper-description">
          <div className="wrapper-title">
            <FontAwesomeIcon icon={faBars} className="icon" />
            <div className="title">Description</div>
          </div>
          <div className="detail-description">ASUS Zenbook Pro 14 Duo OLED
            Incredible Comes From Duo Vision
            World’s first 14.5” 2.8K 120 Hz OLED laptop with 2nd display1
            Get ready to meet the seriously powerful Zenbook Pro 14 Duo OLED, an Intel® Evo™-certified powerhouse that lets you turn up your creative powers to the max. The flagship Intel CPU and creator-grade NVIDIA® GPU are cooled for extreme performance by ASUS IceCool Plus technology, aided by the brand-new AAS Ultra mechanism, which vents the chassis and also tilts the next-generation ScreenPad™ Plus secondary touchscreen to a comfortable angle for a seamless and immersive visual experience. For studio-class visuals, the world-leading 2.8K OLED HDR 16:10 main touchscreen2 has a smooth 120 Hz refresh rate, PANTONE® Validated color accuracy, and a cinema-grade 100% DCI-P3 gamut. Zenbook Pro 14 Duo OLED puts its rivals in the shade, making it the ultimate compact OLED laptop for the discerning creator.</div>
        </div>
      </div>
    </div>
  )
}
