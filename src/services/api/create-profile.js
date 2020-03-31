


import instance from '../axios/axios';

const createProfile = (callback, data, token) => {
    instance.post(`/profile/`, data, {
        headers: {
            'Accept': 'application/json',
            'Authorization': token ? `Token ${token}` : '',
            'Content-Type': 'application/json'
        }
    }

    )
        .then((res) => {
            callback(res)
        }).catch(err => callback(err))
}

export default createProfile