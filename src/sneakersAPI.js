import axios from "axios";

export const  sneakersAPI =  {
    getItems() {return axios.get('https://62f53aa6ac59075124ce14b4.mockapi.io/items')},
    getCart() {return  axios.get('https://62f53aa6ac59075124ce14b4.mockapi.io/cart')},
    getFavorite() {return  axios.get('https://62f53aa6ac59075124ce14b4.mockapi.io/favorite')},
    getOrders() {return  axios.get('https://62f53aa6ac59075124ce14b4.mockapi.io/orders')},

    postItems(obj) {return axios.post('https://62f53aa6ac59075124ce14b4.mockapi.io/items', obj)},
    postCart(obj) {return  axios.post('https://62f53aa6ac59075124ce14b4.mockapi.io/cart', obj)},
    postFavorite(obj) {return  axios.post('https://62f53aa6ac59075124ce14b4.mockapi.io/favorite', obj)},
    postOrders(obj) {return  axios.post('https://62f53aa6ac59075124ce14b4.mockapi.io/orders', obj)},

    deleteItems(id) {return axios.delete(`https://62f53aa6ac59075124ce14b4.mockapi.io/items/${id}`)},
    deleteCart(id) {return axios.delete(`https://62f53aa6ac59075124ce14b4.mockapi.io/cart/${id}`)},
    deleteFavorite(id) {return axios.delete(`https://62f53aa6ac59075124ce14b4.mockapi.io/favorite/${id}`)},
    deleteOrders(id) {return axios.delete(`https://62f53aa6ac59075124ce14b4.mockapi.io/orders/${id}`)},
}