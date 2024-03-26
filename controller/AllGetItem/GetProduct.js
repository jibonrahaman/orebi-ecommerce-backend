const ProductSchema = require("../../models/ProductSchema")
async function GetProduct (req,res){
 try {
    const Product = await ProductSchema.find({}).populate("Variant").populate("Store")
    res.status(200).json(Product)
 } catch (error) {
   console.log("error",error);
   res.status(500).json({ error: "Internal server error" });
}
}
module.exports = GetProduct;