const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const fetch = require("node-fetch");
const corsOptions = {
  origin: '*' // or put your frontend URL: "https://main.dopr9c40j2tao.amplifyapp.com"
};

dotenv.config();
const app = express();
const router = express.Router();
router.use(cors(corsOptions));
app.use(cors());

router.get('/', (req, res) => {
res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
res.json({
message: "Hello World!"
});
});


app.use('/.netlify/functions/api', router);
module.exports = app;
module.exports.handler = serverless(app);
