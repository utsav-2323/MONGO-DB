const jwt = require("jsonwebtoken")


const userAuth=(req,res,next)=>{
    let token = req.header("Authorization");
    if (!token) {
        return res.status(400).json({msg:"token no found"})
    }
    let newToken = token.slice(7,token.length)
    let decode = jwt.verify(newToken,"abc")
    req.user = decode
    next()
}

module.exports = userAuth