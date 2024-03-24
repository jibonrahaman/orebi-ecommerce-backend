const GetAllCategory = require("../../controller/AllGetItem/GetAllCategory")
const express = require("express");
const GetProduct = require("../../controller/AllGetItem/GetProduct");
const GetVariant = require("../../controller/AllGetItem/GetVariant");
const GetStore = require("../../controller/AllGetItem/GetStore");
const AllGet = express();
AllGet.get('/getAllCategory',GetAllCategory);
AllGet.get("/getproduct",GetProduct);
AllGet.get("/getvariant",GetVariant);
AllGet.get("/getstore",GetStore);

module.exports = AllGet;