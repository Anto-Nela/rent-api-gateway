const axios = require('axios');
const jwt= require('jsonwebtoken');
require('dotenv/config');


module.exports = (baseURL,req) => {
  return axios.create({
    baseURL: baseURL,
    params : {
      street: req.query.street,
      maxPrice: req.query.maxPrice,
      minPrice: req.query.minPrice,
      rooms: req.query.rooms,
      tenants: req.query.tenants
    }
  });
}
