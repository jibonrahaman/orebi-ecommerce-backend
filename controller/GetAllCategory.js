const CategorySchema = require("../models/CategorySchema");

async function getAllCategory(req, res) {
    try {
        const getCategoryData = await CategorySchema.find({}).populate("subCategory")
        res.json(getCategoryData); 
    } catch (error) {
        // Handle error appropriately, maybe send an error response
        console.error("Error while fetching categories:", error);
        res.status(500).send("Error fetching categories");
    }
}

module.exports = getAllCategory;
