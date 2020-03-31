 

import axios from '../axios/axios'

const approveUser = (callback, id, token) => {
    axios.patch(`/user/${id}`, null,{
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

export default approveUser