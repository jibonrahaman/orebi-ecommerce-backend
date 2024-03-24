const GetAllCategory = require("../../controller/AllGetItem/GetAllCategory")
const express = require("express");
const GetProduct = require("../../controller/AllGetItem/GetProduct");
const GetVariant = require("../../controller/AllGetItem/GetVariant");
const AllGet = express();
AllGet.get('/getAllCategory',GetAllCategory);
AllGet.get("/getproduct",GetProduct);
AllGet.get("/getvariant",GetVariant);

module.exports = AllGet;