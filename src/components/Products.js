import React from 'react'
import { ProductItem } from './ProductItem'
import headphone_card from '../data/headphone_data.js'
import smartphone_card from '../data/smartphone_data.js'
export const Products = () => {

  return (
    <div className="container">
      <div className="row">
        {
          smartphone_card.map((product) =>
            <div className="col-md-4 col-sm-6 col-lg-3" >
              <ProductItem key={product.id} product={smartphone_card[product.id - 1]} />
            </div>
          )
        }
      </div>
    </div>
  )
}
