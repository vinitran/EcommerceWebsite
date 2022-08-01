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

export { handleCreateNewProductApi, handleGetAllProductsApi };
