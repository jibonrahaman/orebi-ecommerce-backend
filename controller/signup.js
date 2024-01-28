const signUpSchema = require("../models/signUpSchema");
const SendEmailVerify = require("../nodemailer/SendEmailVerify");
const bcrypt = require('bcrypt');
 function signup (req,res){
    const {FirstName,LastName,EmailAdress,MobileNumber,PresentAdress,City,PostCode,Country,Region,Password}=req.body
       
        bcrypt.hash(Password, 10, function(err, hash) {
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
                Password:hash
            })
            SendEmailVerify(EmailAdress)
            signUpData.save();
            res.send(signUpData)
        });
      
      
 }
 module.exports =signup