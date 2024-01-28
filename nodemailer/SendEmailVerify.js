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
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
 }
  module.exports =SendEmailVerify