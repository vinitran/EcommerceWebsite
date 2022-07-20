import React, { useState } from 'react'

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
        <div className="container">
            <h2 className="mt-3">ADD PRODUCT</h2>
            <hr />
            <form
                autoComplete="off"
                className="form-group"
                onSubmit={addProduct}
            >
                <label htmlFor="product-name" className="mt-2"> Product Name</label>
                <input
                    type="text"
                    className="form-control mt-1"
                    required
                    onChange={(e) => setProductName(e.target.value)}
                    value={productName}
                />
                <label htmlFor="product-price" className="mt-2"> Product Price</label>
                <input
                    type="number"
                    className="form-control mt-1"
                    required
                    onChange={(e) => setProductPrice(e.target.value)}
                    value={productPrice}
                />
                <label htmlFor="product-img" className="mt-2"> Product Image</label>
                <input
                    type="file"
                    className="form-control mt-1"
                    onChange={productImgHandler}
                />
                <button className="btn btn-success btn-md w-100 mt-3">ADD</button>
            </form>
            {error && <span>{error}</span>}
        </div>
    )
}
