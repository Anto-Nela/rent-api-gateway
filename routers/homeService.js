var express = require("express");
var router = express.Router();
const apiAdapter = require("./apiAdapter");
const checkAuth= require('../check-auth');
const jwt= require('jsonwebtoken');
const ejs=require('ejs');

require('dotenv/config');

const BASE_URL = "http://localhost:3000";
const api = apiAdapter(BASE_URL);


router.post('/register', (req, res) => {
  api.post(req.path, req.body).then(resp => {
    res.json(resp.data);
  }).catch((error) => {
    res.json(error.message);
  });
});


router.post('/login', (req, res) => {
  api.post(req.path, req.body).then(resp => {
    res.json(resp.data);
  }).catch((error) => {
    res.json(error.message);
  });
});


router.post('/refreshtokens/:uemail',checkAuth, (req, res) => {
const token=req.headers.authorization.split(' ')[1];
const api = apiAdapter(BASE_URL,token);

  api.post(req.path, req.body).then(resp => {
    res.json(resp.data);
  }).catch((error) => {
    res.json(error.message);
  });
});


router.post("/logout", (req, res) => {
  const token=req.headers.authorization.split(' ')[1];
  const api = apiAdapter(BASE_URL,token);

    api.post(req.path, req.body).then(resp => {
    res.json(resp.data);
  }).catch((error) => {
    res.json(error.message);
  });
});


router.get("/verify/:uuid", (req, res) => {
  api.get(req.path).then((resp) => {
    res.json(resp.data);
  }).catch((error) => {
    res.json(error.message);
  });
});

router.get("/users", (req, res) => {
  api.get(req.path).then((resp) => {
    res.json(resp.data);
  }).catch((error) => {
    res.json(error.message);
  });
});

router.get("/users/:id",checkAuth, (req, res) => {
 const token=req.headers.authorization.split(' ')[1];
 const api = apiAdapter(BASE_URL,token); 

  api.get(req.path).then((resp) => {
    res.json(resp.data);
  }).catch((error) => {
    res.json(error.message);
  });
});


router.get("/nearme/:lat/:long", (req, res) => {
  api.get(req.path).then((resp) => {
    res.json(resp.data);
  }).catch((error) => {
    res.json(error.message);
  });
});


router.get("/searchHomes", (req, res) => {
console.log(req.query);
  api.get(req.path,{
    "cmimiMax": $input.params().cmimiMax,
    "cmimiMin": $input.params().cmimiMin,
    "qytet": $input.params().qytet,
    "rooms": $input.params().rooms
}).then((resp) => {
    res.json(resp.data);
  }).catch((error) => {
    res.json(error.message);
  });
});


router.get("/homes/premiumHomes", (req, res) => {
  api.get(req.path).then((resp) => {
    res.json(resp.data);
  }).catch((error) => {
    res.json(error.message);
  });
});


router.get("/homes/normalHomes", (req, res) => {
  api.get(req.path).then((resp) => {
    res.json(resp.data);
  }).catch((error) => {
    res.json(error.message);
  });
});


router.get("/homes/city/:place", (req, res) => {
  api.get(req.path).then((resp) => {
    res.json(resp.data);
  }).catch((error) => {
    res.json(error.message);
  });
});


router.get("/homes/price/:cmimiMax/:cmimiMin", (req, res) => {
  api.get(req.path).then((resp) => {
    res.json(resp.data);
  }).catch((error) => {
    res.json(error.message);
  });
});


router.get("/homes/rooms/:nr_rooms", (req, res) => {
  api.get(req.path).then((resp) => {
    res.json(resp.data);
  }).catch((error) => {
    res.json(error.message);
  });
});


router.get("/homes", (req, res) => {
  api.get(req.path).then((resp) => {
    res.json(resp.data);
  }).catch((error) => {
    res.json(error.message);
  });
});


router.get("/homes/:id", (req, res) => {
  api.get(req.path).then((resp) => {
    res.json(resp.data);
  }).catch((error) => {
    res.json(error.message);
  });
});


router.get("/landlords", (req, res) => {
  api.get(req.path).then((resp) => {
    res.json(resp.data);
  }).catch((error) => {
    res.json(error.message);
  });
});


router.get("/landlords/:id", (req, res) => {
  api.get(req.path).then((resp) => {
    res.json(resp.data);
  }).catch((error) => {
    res.json(error.message);
  });
});


module.exports = router;