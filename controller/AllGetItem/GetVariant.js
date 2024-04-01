const VariantSchema = require("../../models/VariantSchema")
async function GetVariant (req,res){
 try {
    const Variant = await VariantSchema.find({}).populate("productId")
    res.status(200).json(Variant)
 } catch (error) {
    console.log("error",error);
 }
}
module.exports = GetVariant;