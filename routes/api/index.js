const express =require("express");
const authentication = require("./authentication");
const Category = require("./Category");
const merchant = require("./merchant");
const discount = require("./discount");
const AllGet = require("./AllGetItem");
const router =express.Router();
const authAPi=process.env.BASE_AUTH_URL
const authCategory = process.env.BASE_CATEGORY_URL
const authMerchant = process.env.BASE_MERCHANT_URL
const authDiscount = process.env.BASE_DISCOUNT_URL
const authAllGet = process.env.BASE_ALLGET_URL
 router.use( authAPi,authentication);
 router.use(authCategory, Category);
 router.use(authMerchant,merchant);
 router.use(authDiscount,discount);
 router.use(authAllGet,AllGet )
module.exports=router;  