import React, { useState } from 'react'
import '../css/Common.css'
import Navbar from './Navbar';
export const SignUp = () => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [error, setError] = useState('');
    const addAccount = (e) => {
        e.preventDefault();
        if (confirmPassword !== password) {
            setError('Passwords do not match');
        } else {
            console.log(account, password, firstName, lastName)
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
                        {error && <span className="mt-2 error">{error}</span>}
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
                    <button>SIGN UP</button>
                </form>
            </div>
        </div>
    )
}