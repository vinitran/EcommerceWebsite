import React, { useState } from 'react'
import '../css/Common.css'
import Navbar from './Navbar';
import { handleSignUpApi } from '../services/userService';
export const SignUp = () => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [errMessage, setErrMessage] = useState('');
    const addAccount = async (e) => {
        e.preventDefault();
        let userData = {email: account, password, firstName, lastName, address: ''}
        if (confirmPassword !== password) {
            setErrMessage('Passwords do not match');
        } else {
            try {
                
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
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                    <label htmlFor="lastname ">Last Name</label>
                    <input
                        type="text"
                        required
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                    <button type="submit">SIGN UP</button>
                </form>
            </div>
        </div>
    )
}
