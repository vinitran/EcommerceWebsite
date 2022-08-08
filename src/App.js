import React, { useEffect, Component } from 'react'
import { useCookies } from 'react-cookie';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AddProduct } from './components/AddProduct';
import Cart from './components/Cart';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { ProductDetail } from './components/ProductDetail';
import { SignUp } from './components/SignUp';
import { TypeProduct } from './components/TypeProduct';
import { useSelector } from 'react-redux'
import { Profile } from './components/Profile';
import ProductSell from './components/ProductSell';

const App = () => {
  const [cookies] = useCookies();
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/typeProduct=:typeProduct" element={<TypeProduct />} />
      {
        cookies.login == "true" ?
          <>
            <Route path="/cart" element={<Cart />} />
            <Route path='/addproduct' element={<AddProduct />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/mysellingproduct' element={<ProductSell />} />
          </>
          : null
      }
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App