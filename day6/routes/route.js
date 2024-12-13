const express = require("express");
const route = express.Router();
const ctl = require("../controller/ctl");

route.get("/", ctl.First);

module.exports = route ;

