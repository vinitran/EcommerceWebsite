import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import '../css/SignUp.css';
export const Login = () => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const types = ['image/png', 'image/jpeg']
    const addProduct = (e) => {
        e.preventDefault();
        // console.log(productName, productPrice, productImg);
    }

    return (
        <div className="container-signup">
            <Navbar />
            <div className="container-form">
                <form
                    autoComplete="off"
                    className="form-group w-100"
                    onSubmit={addProduct}
                >
                    <label htmlFor="account" className="mt-2 label">Email or mobile phone number</label>
                    <input
                        type="text"
                        className="form mt-1"
                        required
                        onChange={(e) => setAccount(e.target.value)}
                        value={account}
                    />
                    <label htmlFor="password" className="mt-2 label">Password</label>
                    <input
                        type="password"
                        className="form mt-1"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <button className="button mt-4">LOGIN</button>
                </form>
            </div>
        </div>
    )
}
