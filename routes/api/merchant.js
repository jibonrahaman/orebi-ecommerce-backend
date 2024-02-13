const express = require("express");
const BecomeMerchant = require("../../controller/BecomeMerchant");
const secureMerchant = require("../../controller/secureMerchant");
const merchant = express();

merchant.post("/merchant",BecomeMerchant)
merchant.post("/secureMerchant",secureMerchant)
module.exports = merchant;