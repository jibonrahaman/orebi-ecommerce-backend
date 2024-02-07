const express = require("express");
const BecomeMerchant = require("../../controller/BecomeMerchant");
const merchant = express();

merchant.post("/merchant",BecomeMerchant)
module.exports = merchant;