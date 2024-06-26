const signUpSchema = require("../models/signUpSchema");
const SendEmailVerify = require("../nodemailer/SendEmailVerify");
const bcrypt = require('bcrypt');
const emailRegex = require("../emailRegex/emailRegex");
const emailVeryfiedTemplete = require("../helpers/emailVeryfiedTemplete");
const jwt = require('jsonwebtoken');

async function signup(req, res) {
    const { Firstname, LastName, Email, MobileNumber, PresentAdress, City, PostCode, Country, Region, Password } = req.body;

    try {
        // Validation
        if (Firstname == " " || !Firstname){
         return   res.send({error: "Firstname required"})
      }
      if (LastName == " " || !LastName){
         return    res.send({ error: "Lastname is required" })
      }
      
     if (!Email){
         return    res.send({ error: "Email is required" })
      }
      if (!emailRegex(Email)){
         return    res.send({ error: "Email is not correct" })
      }
     if (!MobileNumber){
         return    res.send({ error: "MobileNumber is required" })
      }
   //   if (!PresentAdress){
   //       return  res.status(400).json("PresentAdress is required")
   //    } 
      //  if (!City){
      //    return  res.status(400).json("City is required")
      // }
      // if (!PostCode){
      //    return  res.status(400).json("PresentAdress is required")
      // }
      // if (!Country){
      //    return  res.status(400).json("Country is required")
      // }
      //  if (!Region){
      //    return  res.status(400).json("Region is required")
      // }
       if (!Password){
         return    res.send({ error: "Password is required" })
      }   
      const existEmail = await signUpSchema.findOne({Email})
      if (existEmail){
         return    res.send({ error: "Email is already used" })
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
         var token = jwt.sign({ Email }, "suhashine");
         SendEmailVerify(Email, emailVeryfiedTemplete(token))
         signUpData.save();
         res.send({success: "Registration is succesfully"})
     });    

    } catch (error) {
        console.error("Error in signup:", error);
        res.status(500).json({ error: "An error occurred while signing up" });
    }
}

module.exports = signup;
