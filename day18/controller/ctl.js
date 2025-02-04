const schema = require("../module/schema");
const fs = require("fs");

module.exports.AddData = async (req, res) => {
    req.body.image = req.file.path;
    await schema.create(req.body).then((data) => {    
    res.status(200).json({ msg: "this is data", Info: data });
  });
};

module.exports.AllData = async (req, res) => {
    await schema.find({}).then((data) => {
      res.status(200).json({ "all record and data": data });
    });
  };
  
  module.exports.DeleteData=async(req,res)=>{
    let SingleData = await schema.findById(req.query.id);
    fs.unlinkSync(SingleData.image);
      await schema.findByIdAndDelete(req.query.id).then((data)=>{
          res.status(200).json({msg:"deleted"})
      })
  }
  
  module.exports.EditData=async(req,res)=>{
    console.log(req.file);
    let img = "";
    let SingleData = await schema.findById(req.query.id)
    req.file ? img = req.file.path : img = SingleData.image
    req.file && fs.unlinkSync(SingleData.image)
    req.body.image = img
      await schema.findByIdAndUpdate(req.query.id,req.body).then((data)=>{
          res.status(200).json({msg:"updated", Info: data})
      })
  }