const express =require ("express");
const nodemailer = require("nodemailer");
 
 async function SendEmailVerify (email,templete){
    const transporter = nodemailer.createTransport({
       service : "gmail",
        auth: {
          user: "manvirjibon@gmail.com",
          pass: "fkudcclemsmdrxpm",
        },
      });
      
      const info = await transporter.sendMail({
        from: 'OREBI', // sender address
        to: email, // list of receivers
        subject: "Email Verification", 
        html: templete, // html body
      });
 }
  module.exports =SendEmailVerify