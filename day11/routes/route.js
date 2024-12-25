const express = require("express")
const route = express.Router();
const ctl = require("../controller/ctl");
const multer = require("../multer/murlter");

route.get("/", ctl.Login);
route.post("/userLogin",ctl.userLogin);
route.get("/logout",ctl.Logout);
route.get("/dashboard", ctl.HomePage);
route.get("/addadmin",ctl.Addadmin);
route.get("/viewadmin",ctl.Viewadmin);

route.post("/send",multer,ctl.AddAdminData);
route.get("/delete",ctl.DeleteData);
route.get("/edit",ctl.EditData);
route.post("/update",multer,ctl.UpdateData);


module.exports = route