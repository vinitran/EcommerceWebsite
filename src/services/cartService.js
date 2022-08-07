import axios from '../axios'

let handleGetCartInfoApi = (user_id) => {
    return axios.get(`api/get-cart-info?user_id=${user_id}`)
}

let handleUpdateCartApi = (data) => {
    return axios.put('api/update-cart', data)
}

let handleRemoveProductApi = (product_id, user_id) => {
    return axios.delete(`api/delete-product-in-cart?user_id=${user_id}&product_id=${product_id}`)
}
export {handleGetCartInfoApi, handleUpdateCartApi, handleRemoveProductApi}