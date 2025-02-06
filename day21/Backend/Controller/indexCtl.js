const AdminSchema = require("../Model/Schema");

module.exports.Login = async (req, res) => {
  await AdminSchema.create(req.body).then((data) => {
    res.status(200).json({ msg: "Login", data: data });
  });
};

module.exports.ShowData=async(req,res)=>{
    await AdminSchema.find({}).then((data)=>{
        res.status(200).json({msg:"data found", data})
        // console.log(data)
    })

}

module.exports.DeleteData=async(req,res)=>{
    await AdminSchema.findByIdAndDelete(req.query.id).then((data)=>{
        res.status(200).json({msg:"data deleted"})
    })
}

module.exports.EditData=async(req,res)=>{
  await AdminSchema.findByIdAndUpdate(req.query.id,req.body).then((data)=>{
      res.status(200).json({msg:"updated"})
  })
}