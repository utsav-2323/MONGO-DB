const firstschema = require("../module/firstschema");

module.exports.First = async(req,res)=>{
    let data = await firstschema.find({});
    data && res.render("index", {data}); 
};
module.exports.AddData = async(req,res) =>{
    // console.log(req.body);
    let data = await firstschema.create(req.body);
    data && res.redirect("/");
};

module.exports.EditData = async(req,res)=>{
    let singleData = await firstschema.findById(req.query.id);
    singleData && res.render("edit", { singleData });
};

module.exports.UpdateData = async(req,res)=>{
    let update = await firstschema.findByIdAndUpdate(req.body.id,req.body);
    update && res.redirect("/");
};

module.exports.DeleteData = async(req,res)=>{
    let data = await firstschema.findByIdAndDelete(req.query.id);
    data && res.redirect("/");
};

