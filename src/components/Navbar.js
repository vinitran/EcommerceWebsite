import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import '../css/Navbar.css'
function Navbar() {
  const isLogin = useSelector(state => state.counter.isLogin);
  return (
    <div className="navbox">
      <div className="leftside">
        <Link to='/' className='logo link'>
          <div >Shoppe</div>
        </Link>
        <div className="wrapper-nav-item">
          <Link to='/' className="link nav-item">
            <div className="item">Home</div>
          </Link>
          <div className="nav-item">
            <div className="dropdown">
              <button className="dropbtn">
                <div className="item">Products</div>
              </button>
              <div className="dropdown-content">
                <a href={`/typeProduct=${"Smartphone"}`}>Smartphone</a>
                <a href={`/typeProduct=${"Laptop"}`}>Laptop</a>
                <a href={`/typeProduct=${"Headphone"}`}>Headphone</a>
              </div>
            </div>
          </div>
          <Link to='/contact' className="link nav-item">
            <div className="item">Contact</div>
          </Link>

        </div>

      </div>
      <div className="input-group search">
        <input type="text"
          className="form-control search-input"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <div className="rightside">
        {isLogin ?
          <div className="nav-item">
            <div className="dropdown">
              <button className="dropbtn">
                <div className="item">Trần Thành Vinh</div>
              </button>
              <div className="dropdown-content">
                <a href="/profile">My Profile</a>
                <a href="/cart">My Cart</a>
                <a href="/myProduct">My Product</a>
                <a href="/">Log Out</a>
              </div>
            </div>
          </div>
          :
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Link to='/signup' className='link'>
              {/* <button type="button" className="button">SIGN UP</button> */}
              <button type="button" className="btn btn-outline-secondary button">Sign Up</button>
            </Link>
            <Link to='/login' className='link'>
              <button type="button" className="btn btn-outline-secondary button">Sign In</button>
            </Link>
          </div>
        }
      </div>
    </div >
  )
}

export default Navbar