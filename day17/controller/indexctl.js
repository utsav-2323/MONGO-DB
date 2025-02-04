const schema = require("../module/schema");

module.exports.AddData = async (req, res) => {
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
      await schema.findByIdAndDelete(req.query.id).then((data)=>{
          res.status(200).json({msg:"deleted"})
      })
  }
  
  module.exports.EditData=async(req,res)=>{
      await schema.findByIdAndUpdate(req.query.id,req.body).then((data)=>{
          res.status(200).json({msg:"updated"})
      })
  }