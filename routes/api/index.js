const express =require("express");
const authentication = require("./authentication");
const Category = require("./Category");
const merchant = require("./merchant");
const router =express.Router();
const authAPi=process.env.BASE_AUTH_URL
const authCategory = process.env.BASE_CATEGORY_URL
const authMerchant = process.env.BASE_MERCHANT_URL
 router.use( authAPi,authentication)
 router.use(authCategory, Category);
 router.use(authMerchant,merchant)
module.exports=router;