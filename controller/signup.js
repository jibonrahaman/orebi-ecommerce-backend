const { json } = require("express");
const signUpSchema = require("../models/signUpSchema");
const SendEmailVerify = require("../nodemailer/SendEmailVerify");
const bcrypt = require('bcrypt');
const emailRegex = require("../emailRegex/emailRegex");
 async function signup (req,res){
    const {Firstname,LastName,Email,MobileNumber,PresentAdress,City,PostCode,Country,Region,Password}=req.body
    
    if (Firstname == " " || !Firstname){
        return res.send("Firstname required")
     }
     if (LastName == " " || !LastName){
        return res.json("Lastname required")
     }
     
    if (!Email){
        return res.json("Email is required")
     }
     if (!emailRegex(Email)){
        return res.json ("Email is not correct")
     }
    if (!MobileNumber){
        return res.json("MobileNumber is required")
     }
    if (!PresentAdress){
        return res.json("PresentAdress is required")
     } 
      if (!City){
        return res.json("City is required")
     }
     if (!PostCode){
        return res.json("PresentAdress is required")
     }
     if (!Country){
        return res.json("Country is required")
     }
      if (!Region){
        return res.json("Region is required")
     }
      if (!Password){
        return res.json("Password is required")
     }   
     const existEmail = await signUpSchema.findOne({Email})
     if (existEmail){
        return res.send("email is already used")
     }

        bcrypt.hash(Password, 10, function(err, hash) {
            const signUpData=new signUpSchema({
                Firstname,
                LastName,
                Email,
                MobileNumber,
                PresentAdress,
                City,
                PostCode,
                Country,
                Region,
                Password:hash
            })
            SendEmailVerify(Email)
            signUpData.save();
            res.send(signUpData)
        });
      
      
 }
 module.exports =signup