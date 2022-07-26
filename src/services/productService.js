import axios from '../axios'

// const handleLoginApi = (email, password) => {
//     return axios.post('api/login', { email, password });
// }

const handleCreateNewProductApi = (data) => {
    return axios.post('api/create-new-product', data);
}

export { handleCreateNewProductApi };
