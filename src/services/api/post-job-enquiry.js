/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import axios from '../axios/axios';
import headers from '../axios/headers';

const postJobEnquiry = (callback, data) => {
  axios.post('careers/enquiries/', data, {
    headers: {
      ...headers,
      "Content-Type":"application/json"
}
})
    .then(res => {
      callback(res);
    })
    .catch(err => {
      callback(err);
    });
};

export default postJobEnquiry;