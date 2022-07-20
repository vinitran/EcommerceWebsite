import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AddProduct } from './components/AddProduct';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
export class App extends Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/product='smartphone'&id=0" element={<SignUp />} />
      </Routes>
    )
  }
}

export default App