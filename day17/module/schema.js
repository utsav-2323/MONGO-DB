const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    }
});

const admin = mongoose.model("api",schema);
module.exports = admin;