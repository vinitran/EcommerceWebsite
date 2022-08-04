import axios from '../axios'

let handleGetCartInfoApi = (user_id) => {
    return axios.get(`api/get-cart-info?user_id=${user_id}`)
}

let handleUpdateCartApi = (data) => {
    return axios.put('api/update-cart', data)
}
export {handleGetCartInfoApi, handleUpdateCartApi}