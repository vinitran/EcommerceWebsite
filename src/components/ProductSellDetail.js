import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faDeleteLeft, faBars } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar'
import { Navigate, useParams, useNavigate } from "react-router-dom";
import smartphone_card from '../data/smartphone_data.js'


import '../css/ProductSellDetail.css'

export const ProductSellDetail = () => {
  const params = useParams();
  let navigate = useNavigate();
  function checkId(item) {
    return item.id == params.id;
  }
  const BuyNowCommit = (e) => {
    navigate("/cart");
  }
  const [item, setItem] = useState(smartphone_card.filter(item => checkId(item))[0]);
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
  const SaveCommit = () => {

  };
  const DeleteCommit = () => {
    navigate("/mysellingproduct");
  };
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
            <div className="top in-column">
              <input type="text"
                className="name-input"
                placeholder={item.product_name}
                aria-label="Search"
                value={item.product_name}
                onChange={(e) => setItem({
                  ...item,
                  product_name: e.target.value
                })}
              />
              {/* tuong tu product type voi product name */}
              <input type="text"
                className="type-input"
                placeholder={"Smartphone"}
                aria-label="Search"
                onChange={(e) => item.product_name = e.target.value}
              />
            </div>
            <div className="middle-time">
              <div className="timeselling">Posted in August 25, 2022 at 5:08pm</div>
            </div>
            <div className="middle-price">
              <div className="price-text">Current Price ($)</div>
              <input type="number"
                className="price-input"
                placeholder={item.price}
                aria-label="Search"
                value={item.price}
                onChange={(e) => setItem({
                  ...item,
                  price: e.target.value
                })}
              />
              <div className="price-text mt-2">Amount</div>
              <input type="number"
                className="price-input"
                placeholder={item.amount}
                aria-label="Search"
                value={item.amount}
                onChange={(e) => setItem({
                  ...item,
                  amount: e.target.value
                })}
              />
              <div className="inLine button-group">
                <button className="inLine" onClick={(e) => SaveCommit()}>
                  <FontAwesomeIcon icon={faDownload} className="icon" />
                  <div>Save</div>
                </button>
                <button className="inLine" onClick={(e) => DeleteCommit()}>
                  <FontAwesomeIcon icon={faDeleteLeft} className="icon" />
                  <div>Delete</div>
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
          <input type="text"
            className="description-input"
            placeholder={item.description}
            aria-label="Search"
            value={item.description}
            onChange={(e) => setItem({
              ...item,
              description: e.target.value
            })}
          />
        </div>
      </div>
    </div>
  )
}
