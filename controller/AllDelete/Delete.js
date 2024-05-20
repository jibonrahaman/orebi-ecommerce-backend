const ProductSchema = require("../../models/ProductSchema");
const VariantSchema = require("../../models/VariantSchema");

async function productDelete(req, res) {
    try {
        const deletedProduct = await ProductSchema.findByIdAndDelete(req.body.id);

        // Further operations with deletedProduct if needed
        res.status(200).json({ message: "Product deletion successful", deletedProduct: deletedProduct });
    } catch (error) {
        console.error("Error occurred while deleting product:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}


async function variantDelete (req,res){
const deletedVariant = await VariantSchema.findByIdAndDelete(req.body.id)
}
module.exports = {productDelete,variantDelete};