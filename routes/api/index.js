const express =require("express");
const authentication = require("./authentication");
const router =express.Router();
const authAPi=process.env.BASE_AUTH_URL
 router.use( authAPi,authentication)
module.exports=router;