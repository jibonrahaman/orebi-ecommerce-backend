const express =require("express");
const app =express();
const port =7000;
app.get('/', (req,res)=>{
    res.send("sfsfsf")
})
app.listen(port,()=>{
    console.log("the local host port is running :7000");
})