import React, { useState } from 'react'
import '../css/SignUp.css'
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
                    <label htmlFor="confirm-password" className="mt-2 label">Confirm Password</label>
                    <input
                        type="password"
                        className="form mt-1"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                    <div className='d-flex align-items-end flex-column'>
                        {error && <span className="mt-2 error">{error}</span>}
                    </div>
                    <label htmlFor="firstname" className="mt-2 label">First Name</label>
                    <input
                        type="text"
                        className="form mt-1"
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                    <label htmlFor="lastname " className="mt-2 label">Last Name</label>
                    <input
                        type="text"
                        className="mt-1 form"
                        required
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                    <button className="button mt-4">SIGN UP</button>
                </form>
            </div>
        </div>
    )
}
