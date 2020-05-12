var express = require("express");
var router = express.Router();
var homeService = require("./homeService");
const checkAuth= require('../check-auth');
const jwt= require('jsonwebtoken');
const ejs=require('ejs');

require('dotenv/config');

router.use((req, res, next) => {
  console.log("Called: ", req.path);
  console.log(req.headers);
  next();
});

router.use(homeService);

module.exports = router;