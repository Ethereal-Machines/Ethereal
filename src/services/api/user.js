 

import axios from '../axios/axios';

// get issues
export const getUserCompany = (callback, token) => {
    axios.get('/companycreate/', {
        headers: {
            'Accept': 'application/json',
            'Authorization': token ? `Token ${token}` : '',
            'Content-Type': 'application/json'
        }
    })
    .then((res) => {
        callback(res)
    }).catch(err => callback(err))
}

// forgot password
export const forgotPassword = (callback, data) => {
    axios.patch('/user/forgot-password', data)
    .then((res) => {
        callback(res)
    }).catch((err) => callback(err))
}