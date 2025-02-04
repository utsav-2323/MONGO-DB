const express = require("express")
const route = express.Router()
const ctl = require("../controller/indexctl")

route.post("/",ctl.AddData)
route.get("/allData",ctl.AllData);
route.delete("/deleteData",ctl.DeleteData)
route.put("/editData",ctl.EditData)

module.exports = route