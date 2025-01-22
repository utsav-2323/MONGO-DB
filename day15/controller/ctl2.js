const AdminSchema = require("../module/secondschema");
const mailer = require("../middleware/mail");
const fs = require("fs");


module.exports.addcat = (req,res) => {
    res.render("addcat");
};


module.exports.AddCategoryData= async (req, res) => {
    req.body.image = req.file.path;
    const data = await AdminSchema.create(req.body);
    data && res.redirect("/viewcat");
};
module.exports.Viewcat =async(req,res) => {
    let data = await AdminSchema.find({})
    data && res.render("viewcat",{data});
}
module.exports.editdata = async (req, res) => {
    const data = await AdminSchema.findById(req.query.id);
    data && res.render("editcat", { data });
};
module.exports.updatecat = async (req, res) => {
    let img = "";
    let SingleData = await AdminSchema.findById(req.body.id)
    req.file ? img = req.file.path : img = SingleData.image
    req.file && fs.unlinkSync(SingleData.image)
    req.body.image = img
    let data = await AdminSchema.findByIdAndUpdate(req.body.id,req.body)
    data && res.redirect("/viewcat");
};

module.exports.deletecat = async (req, res) => {
    let singleRecord = await AdminSchema.findById(req.query.id);
    fs.unlinkSync(singleRecord.image); 
    const data = await AdminSchema.findByIdAndDelete(req.query.id);
    data && res.redirect("/viewcat");
};
