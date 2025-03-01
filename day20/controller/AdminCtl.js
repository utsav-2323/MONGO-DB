const AdminSchema = require("../module/AdminSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const mailer = require("../middlewer/Mailer")
const ManagerSchema = require("../module/ManagerSchema")
const EmploySchema = require("../module/EmploySchema")

module.exports.ViewAdmin=async(req,res)=>{
    await AdminSchema.find({}).then((data)=>{
        res.status(200).json({Data:data})
    })
}
module.exports.AdminRegister=async(req,res)=>{
    let user = await AdminSchema.findOne({email:req.body.email})
    if(user){
        res.status(200).json({msg:"user alredy exist"})
    }
    req.body.password = await bcrypt.hash(req.body.password,10)
    await AdminSchema.create(req.body).then((data)=>{
        res.status(200).json({msg:"Admin Added",data:data})
        // console.log(data);
    })
}

module.exports.AdminLogin=async(req,res)=>{
    let user = await AdminSchema.findOne({email:req.body.email})
    if (user) {
       if (await bcrypt.compare(req.body.password,user.password)) {
        let token = jwt.sign({userdata:user},"abc",{expiresIn:"1h"});
        console.log(token);
        token && res.status(200).json({msg:"Login Sucsessful",token:token})
       }else{
        res.status(400).json({msg:"password is wrong"})
       }
    }else{
        res.status(400).json({msg:"user not found"})
    }
}

module.exports.ChangePassword=async(req,res)=>{

    if (await bcrypt.compare(req.body.oldPassword,req.user.userdata.password)) {
        if (req.body.newPassword == req.body.confirmPassword) {
            let newPass = await bcrypt.hash(req.body.newPassword, 10)
             await AdminSchema.findByIdAndUpdate(req.user.userdata._id, { password: newPass })
            res.status(200).json({ msg: "Password Change Succ" })
        }else{
            res.status(400).json({ msg: "New password and confirm password must be same" })
        }
    }else{
        res.status(400).json({ msg: "Password is wrong" })
    }
}

module.exports.forgetPassword = async (req, res) => {
    let data = await AdminSchema.findOne({ email: req.body.email })
    if (!data) {
        res.status(400).json({ msg: "email is wrong" })
    }
    let otp = Math.floor(Math.random() * 1000 + 9000);
    mailer.sendOtp(req.body.email, otp);
    res.cookie("otp", otp);
    res.status(200).json({ msg: "OTP sent successfully !" });
}


// module.exports.AdminCheckpass = async(req,res)=>{
//     // let adminData = req.session.adminData;
//     // let otp = req.session.otp;
//     if (req.body.otp == otp) {
//         if (req.body.newPassword == req.body.confirmPassword) {
//             console.log(adminData._id);
//             let change = await AdminSchema.findByIdAndUpdate(adminData._id,{
//                 password:req.body.newpass,
//             });
//             // change && res.redirect("/");
//             res.status(200).json({ msg: "new password !" });   

//         }else{
//             // console.log("password to be same");
//             // res.redirect("/checkpass")
//             res.status(200).json({ msg: "password to be same !" });   

//         }
//     }else{
//         // console.log("otp is wrong");
//         // res.redirect("/checkpass");
//         res.status(200).json({ msg: "otp is wrong !" });   
        
//     }
// };



module.exports.ManagerRegister=async(req,res)=>{
    let user = await ManagerSchema.findOne({email:req.body.email})
    if(user){
        return res.status(200).json({msg:"user alredy exist"})
    }
    req.body.password = await bcrypt.hash(req.body.password,10)
    await ManagerSchema.create(req.body).then((data)=>{
        res.status(200).json({msg:"Manager Added"})
        // console.log(data);
    })
}

module.exports.ViewManagerData=async(req,res)=>{
    await ManagerSchema.find({}).then((data)=>{
     res.status(200).json({Data:data})
    })
 }
 
 module.exports.DeleteManager=async(req,res)=>{
     await ManagerSchema.findByIdAndDelete(req.query.id).then((data)=>{
         res.status(200).json({msg:"Data Deleted"})
     })
 }
 module.exports.ViewAllEmploy=async(req,res)=>{
     await EmploySchema.find({}).then((data)=>{
         res.status(200).json({Data:data})
     })
 }
 
 module.exports.DeleteEmploy=async(req,res)=>{
     await EmploySchema.findByIdAndDelete(req.query.id).then((data)=>{
         res.status(200).json({msg:"Employe Removed"})
     })
 }