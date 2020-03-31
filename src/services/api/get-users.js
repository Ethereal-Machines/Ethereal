 

import axios from '../axios/axios'

const getUser = (callback, token) => {
    axios.get(`/user`, {
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


export  default getUser