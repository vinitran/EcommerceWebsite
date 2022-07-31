import React, { useEffect, useState } from 'react'
import { ProductItem } from './ProductItem'
import headphone_card from '../data/headphone_data.js'
import { handleGetAllProductsApi } from '../services/productService'
import smartphone_card from '../data/smartphone_data'
//import smartphone_card from '../data/smartphone_data.js'

export const Products = () => {
  const [errMessage, setErrMessage] = useState('');
  const [products, setProducts] = useState([]);
  
  //fail do promise
  useEffect(() => {
     async function getData() {
      let smartphone_card = await handleGetAllProductsApi();
      try {
        if (smartphone_card.products && smartphone_card. errCode !== 0) {
          setErrMessage(smartphone_card.message)
        }
        if (smartphone_card && smartphone_card.errCode === 0) {
          setProducts(smartphone_card.products);
    
        }
    
      } catch (e) {
        if (e.response) {
          if (e.response.smartphone_card) {
            setErrMessage(e.response.smartphone_card.message)
          }
        }
        console.log('error message', e.response);
      }
      
    }
    getData();
  }, [])
 

  

  const listItems = products.map((number) =>
    <div className="col-md-4 col-sm-6 col-lg-3" >
      {console.log(number.product_id)}
      <ProductItem key={number.product_id} product={products[number.product_id - 1]} />
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
