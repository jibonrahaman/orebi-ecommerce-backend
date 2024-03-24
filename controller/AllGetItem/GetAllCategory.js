const CategorySchema = require("../../models/CategorySchema");
const subCategorySchema = require("../../models/subCategorySchema");


async function GetAllCategory(req, res) {
    try {
        const getCategoryData = await CategorySchema.find({}).populate("subCategory")   
        const getAllSubCategory = await subCategorySchema.find({});
     res.json({CATEGORYS:getCategoryData,SUBCATEGORYS:getAllSubCategory})
    } catch (error) {
        // Handle error appropriately, maybe send an error response
        console.error("Error while fetching categories:", error);
        res.status(500).send("Error fetching categories");
    }
}

module.exports = GetAllCategory;
