 const CategorySchema =require('../models/CategorySchema')
async function CategoryController (req,res){
   const {name,description}=req.body;

   const category = new CategorySchema({
   name,
   description
   })
   res.json({success: "Category Created Success"})
   category.save();

   const categoryData = await CategorySchema.find({name})
   console.log(categoryData);
}
module.exports = CategoryController