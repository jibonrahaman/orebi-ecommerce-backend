const express =require("express");
const dbConnection = require("./dbConnection/dbConnect");
const signUpSchema = require("./models/signUpSchema");
const router = require("./routes");
const app =express();
const port =7000;
dbConnection();
app.use(express.json())
// app.use(router)
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