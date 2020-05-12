const express = require('express');
const app = express();
const cors = require('cors');
var router = require("./routers/router");

require('dotenv/config');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

const PORT= process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`server running on port ${PORT} `));