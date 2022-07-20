import React from 'react'
import { ProductItem } from './ProductItem'
import headphone_card from '../data/headphone_data.js'
import smartphone_card from '../data/smartphone_data.js'
export const Products = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const listItems = numbers.map((numbers) =>
    <div className="col-md-4 col-sm-6 col-lg-3" >
      <ProductItem key={numbers} product={smartphone_card[numbers]}/>
    </div>

  );
  return (
    <div className="container content">
      <div className="row">
        {listItems}
      </div>

    </div>
  )
}
