const express = require("express");
const mongoose = require("mongoose");
 
 function dbConnection (){
    mongoose.connect("mongodb+srv://orebiecommerce:jibon123@cluster0.qxeww1u.mongodb.net/Orebi-E-Commerce?retryWrites=true&w=majority").then(()=>{
        console.log("database connected");
    })
 }
 module.exports =dbConnection;