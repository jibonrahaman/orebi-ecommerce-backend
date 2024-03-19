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

// Serving static html files in Express
const path = require('path')
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')))

app.listen(port,()=>{
    console.log("the local host port is running :7000");
})