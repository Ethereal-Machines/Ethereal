 

import axios from '../axios/axios'

const createResource = (callback, data) => {
    axios.post(`/resources/`, data, {
        headers: {
             'Accept': 'application/json',
         "Content-Type":"multipart/form-data"

        }
    })
        .then((res) => {
            callback(res)
        }).catch(err => callback(err))
}

export default createResource