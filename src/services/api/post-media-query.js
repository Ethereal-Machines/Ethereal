/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import axios from '../axios/axios';
import headers from '../axios/headers';

const postMediaQuery = (callback, data) => {
  axios.post('queries/media/',data)
    .then(res => {
      // console.log(res);
      callback(res);
    })
    .catch(err => {
      callback(err);
    });
};

export default postMediaQuery;