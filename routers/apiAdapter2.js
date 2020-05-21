const axios = require('axios');
const jwt= require('jsonwebtoken');
require('dotenv/config');


module.exports = (baseURL,req) => {
  return axios.create({
    baseURL: baseURL,
    params : {
      rruga: req.query.rruga,
      cmimiMax: req.query.cmimiMax,
      cmimiMin: req.query.cmimiMin,
      nrdhoma: req.query.nrdhoma,
      nrpersona: req.query.nrpersona
    }
  });
}
