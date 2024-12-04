const express = require("express");
const port = 1004;
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/",(req,res) => {
    res.render("index");
});
app.get("/page2", (req,res) => {
    res.render("edit");
});
app.listen(port, (err) => {
    err ? console.log(err) : console.log("server started on port" + port);
});