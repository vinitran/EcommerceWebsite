import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import '../css/Common.css';
export const Login = () => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [ableLogin, setAbleLogin] = useState(false);
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
                    <h1>Login</h1>
                    <label htmlFor="account">Email or mobile phone number</label>
                    <input
                        type="text"
                        required
                        onChange={(e) => setAccount(e.target.value)}
                        value={account}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
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
            </div>
        </div>
    )
}
