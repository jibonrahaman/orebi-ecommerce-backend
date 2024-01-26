const express =require("express");
const app =express();
app.use(express.json())
const dbConnection = require("./dbConnection/dbConnect");
const signUpSchema = require("./models/signUpSchema");
require('dotenv').config()
dbConnection();
const router = require("./routes");
app.use(router)
const port =7000;
// app.post('/' , (req,res)=>{
//     const {FirstName,LastName,EmailAdress,MobileNumber,PresentAdress,City,PostCode,Country,Region,Password}=req.body
//     console.log(req.body);
//     const signUpData=new signUpSchema({
//         FirstName,
//         LastName,
//         EmailAdress,
//         MobileNumber,
//         PresentAdress,
//         City,
//         PostCode,
//         Country,
//         Region,
//         Password
//     })
//     signUpData.save();
//     res.send(signUpData)

// })
app.listen(port,()=>{
    console.log("the local host port is running :7000");
})