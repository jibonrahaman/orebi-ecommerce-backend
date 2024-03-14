const VariantSchema = require ('../models/VariantSchema')
async function VariantController (req,res){
try{
    const {name,description,price,quantity,product} = req.body;
   if(name == " " || !name){
    return res.status(400).json("please give Variant Name")
   }else if(description == " " || !description){
    return res.status(400).json("please give Variant Description")
   }else if(price == " " || !price){
    return res.status(400).json("please give Variant Price")
   }else if(quantity == " " || !quantity){
    return res.status(400).json("please give Variant Quantity")
   }else if(product == " " || !product){
    return res.status(400).json("please give  Product Id")
   }
   const Variant = new VariantSchema ({
    name,
    description,
    price,
    quantity,
    product 
    })
    await Variant.save();
    res.status(201).json({ message: "Variant created successfully", Variant });
}catch (error) {
    res.json({ error: "VariantController server error", error })
}
 
}
module.exports = VariantController