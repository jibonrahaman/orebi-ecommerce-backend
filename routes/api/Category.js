const express = require("express");
const CategoryController = require("../../controller/CategoryController");
const CategoryStatusController = require("../../controller/CategoryStatusController");
const Category = express();
Category.post ("/category", CategoryController);
Category.post ("/categorystatus", CategoryStatusController);
module.exports = Category;