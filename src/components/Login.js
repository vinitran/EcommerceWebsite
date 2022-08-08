import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import '../css/Login.css';
export const Login = () => {
    const [cookies, setCookie] = useCookies();
    const [userId, setUserId] = useState(1);
    const [user, setUser] = useState(
        {
            email: "",
            password: "",
        }
    );
    const handleSubmit = (e) => {
        /// api check xem tk mk co dung k, roi set islogin bang true
        e.preventDefault();
        //neu dang nhap thanh cong
        setCookie('login', true, { path: '/' });
        setCookie('userId', userId, { path: '/' });
    };

    return (<>
        {
            cookies.login == "true" ?
                <Navigate to="/" />
                :
                <div className="container-login">
                    <Navbar />
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
                            <button className="inLine" onClick={(e) => handleSubmit(e)}>
                                <div>Login</div>
                            </button>
                            <div className="wrapper-newbie">
                                <div className="newbie in-middle">Are you newbie?</div>
                                <Link to="/signup" className="register in-middle">Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
        }

    </>
    )
}
