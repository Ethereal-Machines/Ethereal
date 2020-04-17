/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import axios from '../axios/axios';
import headers from '../axios/headers';

const postGeneralQuery = (callback, data) => {
  axios.post('queries/general/',data ,{
    headers :{
      'Accept': 'application/json',
      // 'Authorization': sessionStorage.jwt ? `Token ${sessionStorage.jwt}` : '',
      'Content-Type': 'application/json'    
  } 
  })
    .then(res => {
      // console.log(res);
      callback(res);
    })
    .catch(err => {
      callback(err);
    });
};

export default postGeneralQuery;