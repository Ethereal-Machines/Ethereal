import axios from '../axios/axios';
import headers from '../axios/headers';


const pubUnpubDesignFiles = (callback, id,data) => {
    axios.patch(`/resources/${id}/`, data,{
        headers:{
            ...headers,
        'Content-Type': 'application/json'
        }
    })
        .then(res => {
         //console.log(res);
        callback(res)
}).catch(err => {
        callback(err);
});
};

export default pubUnpubDesignFiles;