const express = require("express")
const routes = express.Router()
const ctl = require("../controller/ctl")
const auth = require("../middlewer/auth")
const murlte = require("../multer/murlters")


routes.post("/register",ctl.registerData)
routes.get("/viewData",ctl.viewData)
routes.post("/login",ctl.LoginData)

module.exports = routes