const nodemailer = require('nodemailer')
const http = require("http-status-codes")

const mailer = (req, res, next)=>{
    const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "yungestbee@gmail.com",
        pass: process.env.gmailPassword
    }
})

transporter.sendMail({
    from: "yungestbee@gmail.com",
    to: req.email,
    subject: "H-Control Admin",
    text: `Welcome on board ${req.name}, your username is "Admin" and your password is ${req.password}. Thanks`
}, (error, info)=>{
    if (error) console.log(error)
    else console.log(info.messageId)
})
res.status(http.StatusCodes.CREATED).json(`${req.name} successfully added as an Admin`)
}

module.exports = mailer