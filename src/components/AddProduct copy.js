import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import '../css/Login.css';
export const AddProduct = () => {
    const [user, setUser] = useState(
        {
            email: "",
            password: "",
        }

    );

    return (
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
                        <div>Add Product</div>
                    </div>
                    <div className="input-group input">
                        <input type="text"
                            className="form-control"
                            placeholder="Name Product"
                            aria-label="Search"
                            onChange={(e) => setUser({
                                ...user,
                                email: e.target.value
                            })}
                        />
                    </div>

                    <div className="input-group input">
                        <input type="number"
                            className="form-control"
                            placeholder="Price"
                            aria-label="Search"
                            onChange={(e) => setUser({
                                ...user,
                                password: e.target.value
                            })}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Upload</span>
                        </div>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01" />
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
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
