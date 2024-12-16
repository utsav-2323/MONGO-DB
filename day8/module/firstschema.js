const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }
});

const admin = mongoose.model("Data",schema);
module.exports = admin;