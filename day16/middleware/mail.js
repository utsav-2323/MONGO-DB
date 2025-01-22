const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "vchangani156@rku.ac.in",
        pass: "rjruolklabwhhyeb",
    },
});

module.exports.sendOtp = (to,otp) => {
    let mailOptions = {
        from: "vchangani156@rku.ac.in",
        to: to,
        subject: "Your OTP is Here",
        text:`your otp is ${otp}`,
    };

    transport.sendMail(mailOptions, (err) => {
        err && console.log(err);
    });
};
