 

import axios from '../axios/axios';

// (user id)
export const createIssue = (callback, data, token) => {
    axios.post(`/issues`, data, {
        headers: {
            'Accept': 'application/json',
            'Authorization': token ? `Token ${token}` : '',
            'Content-Type': 'application/json'
        }
    })
        .then((res) => {
            callback(res);
        }).catch((err) => callback(err));
};

// get issues
export const getIssues = (callback, token) => {
    axios.get('/issues', {
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