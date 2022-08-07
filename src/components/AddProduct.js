import React, { useState } from 'react'
import Navbar from './Navbar';
import '../css/Common.css';

export const AddProduct = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productImg, setProductImg] = useState(null);
    const [error, setError] = useState('');

    const types = ['image/png', 'image/jpeg']
    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('');
        } else {
            setProductImg(null);
            setError('Please select a valid image type png or jpeg');
        }
    }

    const addProduct = (e) => {
        e.preventDefault();
        console.log(productName, productPrice, productImg);
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
                    <h1>Add Product</h1>
                    <label htmlFor="product-name" > Product Name</label>
                    <input
                        type="text"
                        required
                        onChange={(e) => setProductName(e.target.value)}
                        value={productName}
                    />
                    <label htmlFor="product-price" > Product Price</label>
                    <input
                        type="number"
                        required
                        onChange={(e) => setProductPrice(e.target.value)}
                        value={productPrice}
                    />
                    <label htmlFor="product-img"> Product Image</label>
                    <input
                        type="file"
                        onChange={productImgHandler}
                    />
                    <button>ADD</button>
                </form>
                {error && <span>{error}</span>}
            </div>
        </div>
    )
}
