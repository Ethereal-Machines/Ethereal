/**
 * Created by rozer on 8/16/2018.
 */


 const headers = {
    'Accept': 'application/json',
    'Authorization': sessionStorage.jwt ? `Token ${sessionStorage.jwt}` : '',
    // 'Content-Type': 'application/json',
    'Content-Type': 'multipart/form-data',
};

export default headers
