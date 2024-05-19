const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
const dbConnection = require('./dbConnection/dbConnect');
dbConnection();


// Routes
const router = require('./routes');
app.use(router);
const port =7000;

// Static files
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')))

app.listen(port,()=>{
    console.log("the local host port is running :7000");
})