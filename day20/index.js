const express = require("express");
const port = 3000;
const path = require("path")
const cookie = require("cookie-parser")
const app = express();
const db = require("./config/db");

app.use(express.urlencoded());
app.use("/",require("./routes/AdminRoute.js"))
app.use("/manager",require("./routes/ManagerRout"))
app.use("/employe",require("./routes/EmployRout"))
app.use(cookie())

app.use("uploads/",express.static(path.join(__dirname,"uploads")))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started at :- " + port);    
})
