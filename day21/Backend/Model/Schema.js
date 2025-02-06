const mongoose = require("mongoose")

let UserSchemamern = mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String
    }
})

let schema = mongoose.model("mern1",UserSchemamern)
module.exports = schema