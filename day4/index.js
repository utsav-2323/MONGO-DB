const express = require("express");
const port = 1012;
const path = require("path");

const app = express();
const db = require("./config/db");
const adminSchema = require("./module/firstschema");

const multer = require("multer");

const Storage = multer.diskStorage({
    destination: (req,File,cb) => {
        cb(null, "uploads/");
    },
    filename: (req,file,cb) => {
        cb(null,file.fieldname + "-" + Date.now());
    },
});

const upload = multer({ storage:Storage }).single("image");


app.set("view engine","ejs");
app.use(express.urlencoded());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.get("/",async(req,res) => {
    let data = await adminSchema.find({});
    data && res.render("index", {data});
})

app.post("/addData",upload, async (req, res) => {
    // console.log(req.file);
    req.body.image = req.file.path;
    let data = await adminSchema.create(req.body)
    data && res.redirect("/");
});

app.get("/deleteData", async (req, res) => {
    let data = await adminSchema.findByIdAndDelete(req.query.id);
    data && res.redirect("/");
});

app.get("/editData", async (req, res) => {
    let singleData = await adminSchema.findById(req.query.id);
    singleData && res.render("edit", { singleData });
});

app.post("/updateData", async (req, res) => {
    let update = await adminSchema.findByIdAndUpdate(req.body.id, req.body);
    update && res.redirect("/");
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server started on port " + port);
    
});