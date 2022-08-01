// import React, { useState } from 'react'
// import { ProductItem } from './ProductItem'
// import headphone_card from '../data/headphone_data.js'
// import { handleGetAllProductsApi } from '../services/productService'
// //import smartphone_card from '../data/smartphone_data.js'
// export const Products = async () => {
//   const [errMessage, setErrMessage] = useState('');
//   let smartphone_card = await handleGetAllProductsApi();
//   console.log(smartphone_card.products)
//   try {
//     if (smartphone_card && smartphone_card.errCode !== 0) {
//       setErrMessage(smartphone_card.message)
//     }
//     if (smartphone_card && smartphone_card.errCode === 0) {
//       // this.props.userLoginSuccess(smartphone_card.user);
//       console.log('loging success');

//     }

//   } catch (e) {
//     if (e.response) {
//       if (e.response.smartphone_card) {
//         setErrMessage(e.response.smartphone_card.message)
//       }
//     }
//     console.log('error message', e.response);
//   }

//   const listItems = smartphone_card.products.map((number) =>
//     <div className="col-md-4 col-sm-6 col-lg-3" >
//       {console.log(number.product_id)}
//       <ProductItem key={number.product_id} product={smartphone_card.products[number.product_id - 1]} />
//     </div>
//   );

//   return (
//     <div className="container">
//       <div className="row">
//         {listItems}
//       </div>
//     </div>
//   )
// }
