 

import axios from '../axios/axios';

const deleteToken = (callback, token) => {
    axios.delete(`/user/token`, {
        headers: {
            'Accept': 'application/json',
            'Authorization': token ? `Token ${token}` : '',
            'Content-Type': 'application/json'
        }
    })
        .then((res) => {
            callback(res)
        }).catch((err) => callback(err));
}

export default deleteToken