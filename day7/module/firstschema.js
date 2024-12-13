const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name:{
        type:String,
        requird:true  
      },
    city:{
        type:String,
        requird:true
    }  
});

const admin = mongoose.model("Student",schema);
module.exports = admin;