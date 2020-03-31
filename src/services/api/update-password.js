 

import axios from '../axios/axios'

const updatePassword = (callback, id, data, token) => {
    axios.patch(`/user/update-password/${id}`, data, {
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

export default updatePassword