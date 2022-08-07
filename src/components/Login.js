import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import '../css/Login.css';
export const Login = () => {
    const [user, setUser] = useState(
        {
            email: "",
            password: "",
        }

    );

    return (
        <div className="container-login">
            <Navbar />
            {/* <div className="container-form">
                <form
                    autoComplete="off"
                    className="form-group w-100"
                    onSubmit={addProduct}
                >
                    <h1>Login</h1>
                    <label htmlFor="account">Email or mobile phone number</label>
                    <input
                        type="text"
                        required
                        className="mt-2"
                        onChange={(e) => setAccount(e.target.value)}
                        value={account}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="mt-2"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    {
                        ableLogin ?
                            <Link to="/">
                                <button>LOGIN</button>
                            </Link>
                            : 
                            <button>LOGIN</button>
                    }

                </form>
            </div> */}
            <div
                className="wrapper-login"
                style={{
                    backgroundImage: "url(" + "https://cf.shopee.vn/file/5cb68eda2bde883a530855113c0ecd21" + ")",
                    backgroundPosition: 'top',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="box-login">
                    <div className="wrapper-title in-middle">
                        <div>Login</div>
                    </div>
                    <div className="input-group input">
                        <input type="text"
                            className="form-control"
                            placeholder="Email/Phonenumber"
                            aria-label="Search"
                            onChange={(e) => setUser({
                                ...user,
                                email: e.target.value
                            })}
                        />
                    </div>
                    <div className="input-group input">
                        <input type="password"
                            className="form-control"
                            placeholder="Password"
                            aria-label="Search"
                            onChange={(e) => setUser({
                                ...user,
                                password: e.target.value
                            })}
                        />
                    </div>
                    <button className="inLine">
                        <div>Login</div>
                    </button>
                    <div className="wrapper-newbie">
                        <div className="newbie in-middle">Are you newbie?</div>
                        <Link to="/signup" className="register in-middle">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
