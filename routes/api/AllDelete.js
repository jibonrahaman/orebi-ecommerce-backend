const express = require("express");
const { productDelete, variantDelete } = require("../../controller/AllDelete/Delete");
const deleted = express();
deleted.post("/productDelete",productDelete)
deleted.post("/variantDelete", variantDelete)
module.exports = deleted;