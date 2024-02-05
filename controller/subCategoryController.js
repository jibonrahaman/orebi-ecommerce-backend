const subCategorySchema = require("../models/subCategorySchema");

async function subCategoryController (req,res){
   const {name,description,subCategory} =req.body;
   try{
     const existsubCategory =await subCategorySchema.find({name})
    if(existsubCategory.length > 0){
        res.json({error:"This SubCategory is already exist"});
     }
   
     const SubCategory = new subCategorySchema({
        name,
        description,
        subCategory
     })
     res.json({success:"Sub Category Created Successfully"});
     SubCategory.save();

   } catch(error){
    res.json({error:"internal server"});
    console.log(error);
   }

} module.exports = subCategoryController;