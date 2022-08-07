import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import '../css/SignUp.css';
export const SignUp = () => {
    const [data, setData] = useState(
        {
            account: "",
            password: "",
            confirmPassword: "",
            fullName: "",
            address: "",
            phoneNumber: "",
            error: "",
        }
    );
    const addAccount = (e) => {
        e.preventDefault();
        if (data.confirmPassword !== data.password) {
            setData({
                ...data,
                error: 'Passwords do not match'
            })
        } else {
            setData({
                ...data,
                error: ''
            })
        }
    };

    return (
        <div className="container-signup">
            <Navbar />
            <div
                className="wrapper-signup"
                style={{
                    backgroundImage: "url(" + "https://cf.shopee.vn/file/5cb68eda2bde883a530855113c0ecd21" + ")",
                    backgroundPosition: 'top',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="box-signup">
                    <div className="wrapper-title in-middle">
                        <div>SignUp</div>
                    </div>
                    <div className="input-group input">
                        <input type="text"
                            className="form-control"
                            placeholder="Email/Phonenumber"
                            aria-label="Search"
                            required
                            onChange={(e) => setData({
                                ...data,
                                account: e.target.value
                            })}
                        />
                    </div>
                    <div className="input-group input">
                        <input type="text"
                            className="form-control"
                            placeholder="Password"
                            aria-label="Search"
                            onChange={(e) => setData({
                                ...data,
                                password: e.target.value
                            })}
                        />
                    </div>
                    <div className="input-group input">
                        <input type="text"
                            className="form-control"
                            placeholder="Confirm Password"
                            aria-label="Search"
                            onChange={(e) => setData({
                                ...data,
                                confirmPassword: e.target.value
                            })}
                        />
                    </div>
                    {data.error && <span className="mt-2 error">{data.error}</span>}
                    <div className="input-group input">
                        <input type="text"
                            className="form-control"
                            placeholder="Full Name"
                            aria-label="Search"
                            onChange={(e) => setData({
                                ...data,
                                fullName: e.target.value
                            })}
                        />
                    </div>
                    <div className="input-group input">
                        <input type="text"
                            className="form-control"
                            placeholder="Address"
                            aria-label="Search"
                            onChange={(e) => setData({
                                ...data,
                                address: e.target.value
                            })}
                        />
                    </div>
                    <div className="input-group input">
                        <input type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            aria-label="Search"
                            onChange={(e) => setData({
                                ...data,
                                phoneNumber: e.target.value
                            })}
                        />
                    </div>
                    <button className="inLine" onClick={(e) => addAccount(e)}>
                        <div>SignUp</div>
                    </button>
                    <div className="wrapper-newbie">
                        <div className="newbie in-middle">Already account ?</div>
                        <Link to="/login" className="register in-middle">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
