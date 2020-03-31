import axios from 'axios';

const loginInstance = axios.create({
    baseURL: 'http://192.168.43.152:8000'
});

const loginUser = (callback, data) => {
    loginInstance.post(`/auth/token/login_new/`, data, {
        headers: {
            'Content-Type': 'application/json'
        },
        crossdomain: true
    })
        .then((res) => { callback(res) })
        .catch(err => callback(err))
}

export default loginUser
