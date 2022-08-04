import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AddProduct } from './components/AddProduct';
import Cart from './components/Cart';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { ProductDetail } from './components/ProductDetail';
import { SignUp } from './components/SignUp';
import { TypeProduct } from './components/TypeProduct';
import { useSelector } from 'react-redux'

export class App extends Component {


  render() {
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/:id" element={<ProductDetail />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/typeProduct=:typeProduct" element={<TypeProduct />} />
        <Route path='/addproduct' element={<AddProduct />} />


      </Routes>
    )
  }
}

export default App