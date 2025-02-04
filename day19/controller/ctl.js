const schema = require("../module/schema");
const fs = require("fs");
const bcrypt = require("bcryptjs")
let jwt = require("jsonwebtoken")

module.exports.registerData=async(req,res)=>{
  let user = await schema.findOne({email:req.body.email})
  if (user) {
      return res.status(200).json({msg:"user alredy exist"})
  }
  req.body.password = await bcrypt.hash(req.body.password,10)
  await schema.create(req.body).then((data)=>{
  res.status(200).json({msg:"user Added"})
  })
}

module.exports.viewData=async(req,res)=>{
  let data = await schema.find({})
 data && res.status(200).json({msg:data})
}

// module.exports.LoginData=async(req,res)=>{
//   let user =  await schema.findOne({email:req.body.email})
//   if (user) {
//    if (await bcrypt.compare(req.body.password,user.password)) {
//        let token = jwt.sign({userData:user},"abc",{expiresIn:"1h"})
//        token && res.status(200).json({msg:"user Login",token:token})
//       // console.log(token);
//    }else{
//        res.status(400).json({msg:"password wrong"})
//    }
//   }else{
//    return res.status(400).json({msg:"User not Found"})
//   }
// }

module.exports.LoginData=async(req,res)=>{
  await schema.findOne({ email: req.body.email }).then((data) => {
    if(!data){
       res.status(200).json({msg:"user not found"});
    }else{
      if(bcrypt.compare(req.body.password, data.password)) {
        let token = jwt.sign({ userData: data }, "abc", { expiresIn: "1h" });
        res.status(200).json({ msg: "user logged successfully!", token: token, data:data});
        // console.log(token);
      }else{
       res.status(200).json({msg:"password is wrong"});
      }
    }
  });
};