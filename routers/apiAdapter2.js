const axios = require('axios');
const jwt= require('jsonwebtoken');
require('dotenv/config');


module.exports = (baseURL,req) => {
  return axios.create({
    baseURL: baseURL,
    params : {
      qytet: req.query.qytet,
      cmimiMax: req.query.cmimiMax,
      cmimiMin: req.query.cmimiMin,
      rooms: req.query.rooms
    }
  });
}
