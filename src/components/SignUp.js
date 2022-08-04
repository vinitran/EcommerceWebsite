import React, { useState } from 'react'
import '../css/Common.css'
import Navbar from './Navbar';
import { handleSignUpApi } from '../services/userService';
export const SignUp = () => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [first_name, setfirst_name] = useState('');
    const [last_name, setlast_name] = useState('');

    const [errMessage, setErrMessage] = useState('');
    const addAccount = async (e) => {
        e.preventDefault();
        let userData = {email: account, password, first_name, last_name, address: ''}
        if (confirmPassword !== password) {
            setErrMessage('Passwords do not match');
        } else {
            try {
                //console.log
                let data = await handleSignUpApi(userData);
                if (data && data.errCode !== 0) {
                    setErrMessage(data.message)
                }
                if (data && data.errCode === 0) {
                   // this.props.userLoginSuccess(data.user);
                    console.log('Sign up success');
                }
    
            } catch (e) {
                if (e.response) {
                    if (e.response.data) {
                        setErrMessage(e.response.data.message)
                    }
            
                console.log('error message', errMessage);
            }
           // console.log(account, password)
            // console.log(productName, productPrice, productImg);
        }
    
            console.log(userData)
    }
    }
    return (
        <div className="container-signup">
            <Navbar />
            <div className='container-form'>
                <form
                    autoComplete="off"
                    className="form-group w-100"
                    onSubmit={addAccount}
                >
                    <h1>Sign Up</h1>
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
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        type="password"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                    <div className='d-flex align-items-end flex-column'>
                        {errMessage && <span className="mt-2 error">{errMessage}</span>}
                    </div>
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="text"
                        required
                        onChange={(e) => setfirst_name(e.target.value)}
                        value={first_name}
                    />
                    <label htmlFor="lastname ">Last Name</label>
                    <input
                        type="text"
                        required
                        onChange={(e) => setlast_name(e.target.value)}
                        value={last_name}
                    />
                    <button type="submit">SIGN UP</button>
                </form>
            </div>
        </div>
    )
}
