const express = require("express")
const route = express.Router();
const ctl2 = require("../controller/ctl2");
const passport = require("passport");
const multer = require("multer");
const localSt = require("../middleware/passport");

const Storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null , "uploads2/")
    },
    filename:(req,file,cb)=>{
        cb(null, file.fieldname + "-" + Date.now());
    }
});

const uploads2 = multer({storage:Storage}).single("image");


route.get("/addcat",passport.checkAuth, ctl2.addcat);
route.get("/viewcat",passport.checkAuth,ctl2.Viewcat);
route.get("/editData" , ctl2.editdata);
route.get("/deleteData" , ctl2.deletecat);

route.post("/add",uploads2,ctl2.AddCategoryData);
route.post("/updatecat",uploads2,ctl2.updatecat);






module.exports = route