const axios = require('axios');
const jwt= require('jsonwebtoken');
require('dotenv/config');


module.exports = (baseURL,token) => {

  axios.defaults.headers.common = {'Authorization': `Bearer ${token}`};
  return axios.create({
    baseURL: baseURL,
    headers : {
      'Authorization': 'Bearer '+ token
    }
  });
}
