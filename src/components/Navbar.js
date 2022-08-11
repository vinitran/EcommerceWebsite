import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import '../css/Navbar.css'
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [cookies, setCookie] = useCookies();
  let navigate = useNavigate();
  const Logout = (e) => {
    e.preventDefault();
    setCookie('login', false, { path: '/' });
    setCookie('userId', null, { path: '/' });
  };
  const [search, setSearch] = useState(null)
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('do validate')
    navigate(`/search/${search}`);
    }
  }

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
                <button >
                  <Link className="button-link" to={`/typeProduct=${"Smartphone"}`}>Smartphone</Link>
                </button>
                <button >
                  <Link className="button-link" to={`/typeProduct=${"Laptop"}`}>Laptop</Link>
                </button>
                <button >
                  <Link className="button-link" to={`/typeProduct=${"Headphone"}`}>Headphone</Link>
                </button>
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
          onKeyDown={handleKeyDown}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="rightside">
        {
          cookies.login == "true" ?
            <>
              <Link to="/cart" >
                <FontAwesomeIcon icon={faCartShopping} className="icon" />
              </Link>
              <Link to="/addproduct" >
                <FontAwesomeIcon icon={faSquarePlus} className="icon" />
              </Link>
              <div className="nav-item">
                <div className="dropdown">
                  <button className="dropbtn">
                    <div className="item">Trần Thành Vinh</div>
                  </button>
                  <div className="dropdown-content">
                    <button >
                      <Link className="button-link" to="/profile">My Profile</Link>
                    </button>
                    <button >
                      <Link className="button-link" to="/cart">My Cart</Link>
                    </button>
                    <button >
                      <Link className="button-link" to="/mysellingproduct">My Product</Link>
                    </button>
                    <button onClick={(e) => Logout(e)}>
                      <div className="logout">Log Out</div>
                    </button>
                  </div>
                </div>
              </div>
            </>
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