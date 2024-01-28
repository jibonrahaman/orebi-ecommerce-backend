const signUpSchema = require("../models/signUpSchema");
const SendEmailVerify = require("../nodemailer/SendEmailVerify");

 function signup (req,res){
    const {FirstName,LastName,EmailAdress,MobileNumber,PresentAdress,City,PostCode,Country,Region,Password}=req.body
        console.log(req.body);
        const signUpData=new signUpSchema({
            FirstName,
            LastName,
            EmailAdress,
            MobileNumber,
            PresentAdress,
            City,
            PostCode,
            Country,
            Region,
            Password
        })
        SendEmailVerify(EmailAdress)
        signUpData.save();
        res.send(signUpData)
 }
 module.exports =signup