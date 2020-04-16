import  axios  from '../axios/axios';
import headers from '../axios/headers';

 const postMedia = (callback,data) => {
    axios.post(`/medias/`, data, {
        headers: {
            ...headers,
        }
    })
    .then(res => {
        callback(res)
    })
    .catch(err => callback(err))
};

export default postMedia