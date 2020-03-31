import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.etherealmachines.com'
});

export const login = (callback, data) => {
    instance.post('/auth/token/login', data)
        .then((res) => {
            callback(res);  
        }).catch((err) => callback(err));
};

export const tokenVerify = (callback, token) => {
    let data = 
    {
        token : token
    }
    instance.post(`/auth/token-verify/`, data )
        .then((res) => {
            callback(res)
        }).catch((err) => callback(err))
}