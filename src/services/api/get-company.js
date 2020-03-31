 

import axios from '../axios/axios'

const getCompany = (callback, token) => {
    axios.get(`/user/company`, {
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

export default getCompany