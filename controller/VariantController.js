const VariantSchema = require ('../models/VariantSchema')
const ProductSchema = require ('../models/ProductSchema')
async function VariantController (req,res){
try{
    const {ram,storage,color,price,size,quantity,product} = req.body;
   if(price == " " || !price){
    return res.status(400).json("please give Variant Price")
   }else if(quantity == " " || !quantity){
    return res.status(400).json("please give Variant Quantity")
   }else if(product == " " || !product){
    return res.status(400).json("please give  Product Id")
   }
   const Variant = new VariantSchema ({
    ram,
    color,
    size,
    storage,
    price,
    quantity, 
    product 
    })
    await Variant.save();
    res.status(201).json({ message: "Variant created successfully", Variant });
       
     const updateVariant = await ProductSchema.findOneAndUpdate(
        {_id :Variant.product },
        {$push:{Variant:Variant._id}},
        {new:true}
     )

}catch (error) {
    res.json({ error: "VariantController server error", error })
}
 
}
module.exports = VariantController