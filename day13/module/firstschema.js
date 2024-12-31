const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    office:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    }
});

const admin = mongoose.model("Data",schema);
module.exports = admin;