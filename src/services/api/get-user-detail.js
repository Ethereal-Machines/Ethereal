 

import axios from '../axios/axios'

const getUserProfile = (callback, id, token) => {
    axios.get(`/user/${id}`, {
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


export  default getUserProfile