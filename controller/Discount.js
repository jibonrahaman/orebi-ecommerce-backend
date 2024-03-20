const DiscountSchema = require ("../models/DiscountSchema");
const { isValidObjectId } = require("mongoose");
function DiscountController (req,res){
const {cash,percent,flat,ProductId,CategoryId,SubCategoryId,VariantId} = req.body;
if (!CategoryId && !SubCategoryId && !ProductId && !VariantId) {
    return res.status(400).send({
      message: "Please provide the Id where you wanted to create discount",
    });
  }
  if (ProductId) {
    if (!isValidObjectId(ProductId))
      return res.status(400).send({ message: "Invalid Id" });
    // const validId = await categorySchema.findById(categoryId);
    // if (!validId) return res.status(400).send({ message: "Invalid Id" });
  }
}
module.exports = DiscountController;