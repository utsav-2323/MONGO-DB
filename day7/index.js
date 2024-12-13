const express = require("express");
const port = 1009;
const db = require("./config/db");
const path = require("path");
const app = express();

app.set("view engine" , "ejs");
app.use(express.urlencoded());
app.use("/",require("./routes/route"));


app.listen(port, (err)=>{
    err ? console.log(err) : console.log("server" + port);
});

