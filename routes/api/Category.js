const express = require("express");
const CategoryController = require("../../controller/CategoryController");
const Category = express();
Category.post ("/category", CategoryController);
module.exports = Category;