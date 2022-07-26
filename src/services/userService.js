import axios from '../axios'

const handleLoginApi = (email, password) => {
    return axios.post('api/login', { email, password });
}

const handleSignUpApi = (data) => {
    return axios.post('api/create-new-user', data);
}

export { handleLoginApi, handleSignUpApi };
