const express = require("express");
const CategoryController = require("../../controller/CategoryController");
const CategoryStatusController = require("../../controller/CategoryStatusController");
const subCategoryController = require("../../controller/subCategoryController");
const Category = express();
Category.post ("/category", CategoryController);
Category.post ("/categorystatus", CategoryStatusController);
Category.post ("/subcategory", subCategoryController);
module.exports = Category;