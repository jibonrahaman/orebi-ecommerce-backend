const express =require ("express");
const nodemailer = require("nodemailer");
 
 function SendEmailVerify (){
    const transporter = nodemailer.createTransport({
       service : "gmail",
        auth: {
          user: "manvirjibon@gmail.com",
          pass: "",
        },
      });
 }
  module.exports =SendEmailVerify