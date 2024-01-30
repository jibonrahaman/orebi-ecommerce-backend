const express =require ("express");
const nodemailer = require("nodemailer");
 
 async function SendEmailVerify (email){
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
        html: `<div><img alt=""src=https://i.ibb.co/qdqTcby/OREBI.png style=margin-left:50px;margin-top:30px><p style=font-weight:700;font-size:20px;color:teal>Please Verify Your Email</p><button style=padding:10px;border-radius:10px;background-color:#000;color:#fff;font-weight:700;font-size:15px;margin-left:35px>Confim Verify</button></div>`, // html body
      });
 }
  module.exports =SendEmailVerify