

import axios from '../axios/axios'

const postJobEnquiry = (callback, data) => {
  axios.post(`/resources/`, data, {
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'

      }
  })
      .then((res) => {
          callback(res)
      }).catch(err => callback(err))
}

export default postJobEnquiry