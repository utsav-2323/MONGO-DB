const express = require("express")
const ctl = require("../controller/AdminCtl")
const rout = express.Router()
const AdminAuth = require("../middlewer/AdminAuth")

rout.get("/",ctl.ViewAdmin)
rout.post("/adminRegister",ctl.AdminRegister)
rout.post("/adminLogin",ctl.AdminLogin)
rout.put("/changePass",AdminAuth,ctl.ChangePassword)
rout.post("/forgotPassword",ctl.forgetPassword)
// rout.post("/admincheckpass",ctl.AdminCheckpass)
rout.post("/registerManager",ctl.ManagerRegister)
rout.get("/viewManagerData",ctl.ViewManagerData)
rout.delete("/deleteManager",ctl.DeleteManager)
rout.get("/viewAllEmploy",ctl.ViewAllEmploy)
rout.delete("/deleteEmploy",ctl.DeleteEmploy)


module.exports = rout