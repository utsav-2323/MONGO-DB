const AdminSchema = require("../module/firstschema");
const fs = require("fs")

module.exports.HomePage = async(req,res) =>{
    let data = await AdminSchema.find({});
    res.render("Dashboard",{data});
}

module.exports.Viewadmin =async(req,res) => {
    res.render("viewadmin");
}

module.exports.Addadmin =async(req,res) => {
    res.render("addadmin");
}