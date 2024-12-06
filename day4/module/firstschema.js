const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    authername: { 
        type: String, 
        required: true 
    },
    price: { 
        type: String, 
        required: true 
    },
    publishdata: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
        required: true 
    },
});

const admin = mongoose.model("Student",schema);
module.exports = admin;