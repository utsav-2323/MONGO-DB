const express = require("express");
const route = express.Router();
const ctl = require("../controller/ctl");

route.get("/", ctl.First);
route.post("/addData", ctl.AddData);
route.get("/edit", ctl.EditData);
route.post("/updateData", ctl.UpdateData);
route.get("/delete", ctl.DeleteData);

module.exports = route ;

