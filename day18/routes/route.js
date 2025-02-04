const express = require("express")
const routes = express.Router()
const ctl = require("../controller/ctl")
const murlte = require("../multer/murlters")

routes.post("/",murlte,ctl.AddData);
routes.get("/allData",ctl.AllData);
routes.delete("/deleteData",murlte,ctl.DeleteData);
routes.put("/editData",murlte,ctl.EditData);

module.exports = routes