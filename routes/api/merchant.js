const express = require("express");
const BecomeMerchant = require("../../controller/BecomeMerchant");
const { productMidleware,productController } = require("../../controller/ProductCreated");
const VariantController = require("../../controller/VariantController");
const upload = require("../../midleware/Multer_Midleware");
const merchant = express();

merchant.post("/merchant",BecomeMerchant)
merchant.post("/createProduct",productMidleware,productController)
merchant.post ("/createVariant",upload.single("UploadImg"), VariantController)
module.exports = merchant;