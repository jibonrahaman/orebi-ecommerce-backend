const express = require("express");
const DiscountController = require("../../controller/Discount");
const discount = express();
discount.post("/createDiscount",DiscountController)
module.exports = discount