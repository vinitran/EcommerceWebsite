import React from 'react'
import { ProductItem } from './ProductItem'
import headphone_card from '../data/headphone_data.js'
import smartphone_card from '../data/smartphone_data.js'
export const Products = () => {
  const listItems = smartphone_card.map((number) =>  
    <div className="col-md-4 col-sm-6 col-lg-3" >
      {console.log(number.id)}
      <ProductItem key={number.id} product={smartphone_card[number.id-1]}/>
    </div>
  );
  return (
    <div className="container">
      <div className="row">
        {listItems}
      </div>
    </div>
  )
}
