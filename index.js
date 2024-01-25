const express =require("express");
const app =express();
const port =7000;
const signUpSchema =require('./models/signUpSchema')
app.use(express.json())
app.get('/', (req,res)=>{
    res.send("sfsfsf")
})
app.post('/' , (req,res)=>{
    const {FirstName,LastName,EmailAdress,MobileNumber,PresentAdress,City,PostCode,Country,Region,Password}=req.body
    console.log(req.body);

})
app.listen(port,()=>{
    console.log("the local host port is running :7000");
})