 

import axios from '../axios/axios'

const createCompany = (callback, data, token) => {
    axios.post(`/user/company`, data, {
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

export default createCompany