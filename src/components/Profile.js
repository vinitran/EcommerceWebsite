import React, { useState } from 'react'
import Navbar from './Navbar';
import "../css/Profile.css";
export const Profile = () => {


    const [user, setUser] = useState({
        fullName: 'Tran Thanh Vinh',
        email: 'vinitran124@gmail.com',
        phoneNumber: '0345260234',
        sex: 'Male',
        dateOfBirth: '10/10/2002',
        shopName: "Vini",
    });
    const radios = [
        { value: 'Male' },
        { value: 'Female' },
        { value: 'Other' },
    ];
    const [fullName, setFullName] = useState(user.fullName);
    const [email, setEmail] = useState(user.email);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
    const [sex, setSex] = useState(user.sex);
    const [dateOfBirth, setDateOfBirth] = useState(user.dateOfBirth);
    const [shopName, setShopName] = useState(user.shopName);
    return (
        <div className="container-signup">
            <Navbar />
            <div className="wrapper-profile">
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <h1>My Profile</h1>
                </div>
                <div className="form mt-3">
                    <div className="left-side">
                        <label>Full Name</label>
                    </div>
                    <div className="right-side">
                        <input
                            type="text"
                            className="input"
                            onChange={(e) => setFullName(e.target.value)}
                            value={fullName} />
                    </div>
                </div>
                <div className="form">
                    <div className="left-side">
                        <label>Email</label>
                    </div>
                    <div className="right-side">
                        <input
                            type="text"
                            className="input"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} />
                    </div>
                </div>
                <div className="form">
                    <div className="left-side">
                        <label>Phone Number</label>
                    </div>
                    <div className="right-side">
                        <input
                            type="text"
                            className="input"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            value={phoneNumber} />
                    </div>
                </div>
                <div className="form">
                    <div className="left-side">
                        <label>Sex</label>
                    </div>
                    <div className="right-side">
                        {radios.map((radio) => (
                            <div className="custom-control custom-radio custom-control-inline radio">
                                <input
                                    type="radio"
                                    id="customRadioInline1"
                                    name="customRadioInline1"
                                    className="custom-control-input"
                                    onClick={(e) => setSex(e.target.value)}
                                    value={radio.value}
                                />
                                <label
                                    className="custom-control-label sex"
                                    for="customRadioInline1">{radio.value}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="form">
                    <div className="left-side">
                        <label>Date of birth</label>
                    </div>
                    <div className="right-side">
                        <input
                            type="date"
                            className="input"
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            value={dateOfBirth} />
                    </div>
                </div>
                <div className="form">
                    <div className="left-side">
                        <label>Shop's Name</label>
                    </div>
                    <div className="right-side">
                        <input
                            type="text"
                            className="input"
                            onChange={(e) => setShopName(e.target.value)}
                            value={shopName} />
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className="button">Save</button>
                </div>
            </div>
        </div>
    )
}
