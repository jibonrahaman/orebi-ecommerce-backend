const express =require("express");
const authentication = require("./authentication");
const Category = require("./Category");
const router =express.Router();
const authAPi=process.env.BASE_AUTH_URL
const authCategory = process.env.BASE_CATEGORY_URL
 router.use( authAPi,authentication)
 router.use(authCategory, Category)
module.exports=router;