const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv')

 function dbConnection (){
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("database connected");
    })
 }
 module.exports =dbConnection;