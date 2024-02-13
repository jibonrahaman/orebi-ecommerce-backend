const express = require("express");
const BecomeMerchant = require("../../controller/BecomeMerchant");
const { productMidleware,productController } = require("../../controller/ProductCreated");
const merchant = express();

merchant.post("/merchant",BecomeMerchant)
merchant.post("/createProduct",productMidleware,productController)
module.exports = merchant;