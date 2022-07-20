import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import '../css/Navbar.css'
function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="navbox">
      <div className="leftside">
        <Link to='/' className='link'>
          <h1 className="logo">Shoppe</h1>
        </Link>
        <div className="wrapper-nav-item">
          <Link to='/' className="link nav-item">
            <h1 className="item">Home</h1>
          </Link>
          <div className="nav-item">
            <div className="dropdown">
              <button className="dropbtn">
                <h1>Products</h1>
              </button>
              <div className="dropdown-content">
                <a href="#">Smartphone</a>
                <a href="#">Laptop</a>
                <a href="#">Headphone</a>
              </div>
            </div>
          </div>
          <Link to='/contact' className="link nav-item">
            <h1 className="item">Contact</h1>
          </Link>
        </div>

      </div>
      <div className="rightside">
        <Link to='/signup' className='link'>
          <button type="button" className="button">SIGN UP</button>
        </Link>
        <Link to='/login' className='link'>
          <button type="button" className="button" >LOGIN</button>
        </Link>
      </div>
    </div >
  )
}

export default Navbar