const mongoose = require("mongoose")

const schema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const AuthSchema = mongoose.model("AuthSchema",schema)
module.exports = AuthSchema