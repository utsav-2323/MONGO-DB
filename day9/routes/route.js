const express = require("express")
const route = express.Router();
const ctl = require("../controller/ctl")
const multer = require("../multer/murlter")

route.get("/",ctl.HomePage);
route.get("/viewadmin",ctl.Viewadmin);
route.get("/addadmin",ctl.Addadmin);


module.exports = route