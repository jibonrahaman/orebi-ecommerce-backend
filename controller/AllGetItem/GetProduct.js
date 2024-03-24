const ProductSchema = require("../../models/ProductSchema")
async function GetProduct (req,res){
 try {
    const Product = await ProductSchema.find({}).populate("Variant")
    res.status(200).json(Product)
 } catch (error) {
    console.log("error",error);
 }
}
module.exports = GetProduct;