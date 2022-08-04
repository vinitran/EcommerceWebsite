import axios from '../axios'

// const handleLoginApi = (email, password) => {
//     return axios.post('api/login', { email, password });
// }

const handleCreateNewProductApi = (data) => {
    return axios.post('api/create-new-product', data);
}

const handleGetAllProductsApi = () => {
    return axios.get('/api/get-all-products')
}

const handleGetProductInfoApi = (id) => {
    console.log(id)
    return axios.get(`/api/get-product-info?product_id=${id}`)
}

export { handleCreateNewProductApi, handleGetAllProductsApi, handleGetProductInfoApi };
