const express = require("express");
const BecomeMerchant = require("../../controller/BecomeMerchant");
const SecureMerchant = require("../../controller/SecureMerchant");
const merchant = express();

merchant.post("/merchant",BecomeMerchant)
merchant.post("/securemerchant",SecureMerchant)
module.exports = merchant;