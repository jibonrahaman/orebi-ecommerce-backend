const express = require("express");
const productDelete = require("../../controller/AllDelete/Delete");
const deleted = express();
deleted.post("/productDelete",productDelete)
module.exports = deleted;