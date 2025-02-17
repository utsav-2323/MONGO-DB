const mailer=require("nodemailer");

const transport = mailer.createTransport({
  service : "gmail",
  auth : {
    user : "utsacbhalodiya2323@gmail.com",
    pass : "lwkqzigpdtspswln"
  }
})

module.exports.sendOtp=(to,otp)=>{
  let mailOption = {
    from : "utsacbhalodiya2323@gmail.com",
    to : to,
    subject : "Your OTP",
    text : `Your OTP is ${otp}`
  }

  transport.sendMail(mailOption,(err)=>{
    err && console.log(err);
  })
  
}
