/**
 * Created by rozer on 8/16/2018.
 */
import axios from 'axios';

const loginInstance = axios.create({
    baseURL: 'http://192.168.1.114:8000'
});

const loginUser = (callback,data) => {
    loginInstance.post(`/auth/jwt/create/`,data,{
        headers:{
        'Content-Type': 'application/json'
    }
    })
        .then((res) => {callback(res)})
    .catch(err => callback(err))
}

export default loginUser
