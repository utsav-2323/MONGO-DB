const express = require("express")
const route = express.Router();
const ctl = require("../controller/ctl")
const multer = require("../multer/murlter")

route.get("/",ctl.HomePage)
route.get("/addpage",ctl.AddPage)
route.post("/send",multer,ctl.AddData)
route.get("/delete",ctl.DeleteData)
route.get("/edit",ctl.EditPage)
route.post("/update",multer,ctl.UpdateData)


module.exports = route