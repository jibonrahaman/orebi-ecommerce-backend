const express = require("express");
const router=express.Router();
const apiRouter =require('./api')
const baseApi=process.env.BASE_URL
router.use(baseApi, apiRouter)
module.exports =router; 