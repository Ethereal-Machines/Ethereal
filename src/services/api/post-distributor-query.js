/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import axios from '../axios/axios';

const postDistributorQuery = (callback, data) => {
  axios.post(`queries/distributor/`,data,{
    headers: {
      'Accept': 'application/json',
  'Content-Type':'application/json'

 }
})
 .then((res) => {
     callback(res)
 }).catch(err => callback(err))
}

export default postDistributorQuery;