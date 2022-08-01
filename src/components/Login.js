import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import '../css/Common.css';
import { handleLoginApi } from '../services/userService';
export const Login = () => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [errMessage, setErrMessage] = useState('');
    const [ableLogin, setAbleLogin] = useState(false);
    const [error, setError] = useState('');

    const types = ['image/png', 'image/jpeg']
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            let data = await handleLoginApi(account, password);
            if (data && data.errCode !== 0) {
                setErrMessage(data.message)
            }
            if (data && data.errCode === 0) {
               // this.props.userLoginSuccess(data.user);
                console.log('loging success');
            }

        } catch (e) {
            if (e.response) {
                if (e.response.data) {
                    setErrMessage(e.response.data.message)
                }
            }
            console.log('error message', e.response);
        }
       // console.log(account, password)
        // console.log(productName, productPrice, productImg);
    }
    return (
        <div className="container-signup">
            <Navbar />
            <div className="container-form">
                <form
                    autoComplete="off"
                    className="form-group w-100"
                    onSubmit={handleLogin}
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
