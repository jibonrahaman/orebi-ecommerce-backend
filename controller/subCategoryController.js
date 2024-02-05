const subCategorySchema = require("../models/subCategorySchema");

async function subCategoryController (req,res){
   const {name,description,category} =req.body;
   try{
     const existsubCategory =await subCategorySchema.find({name})
    if(existsubCategory.length > 0){
        res.json({error:"This SubCategory is already exist"});
     }else{
        const SubCategory = new subCategorySchema({
            name,
            description,
            category
         })
         res.json({success:"Sub Category Created Successfully"});
         SubCategory.save();
     }
    
   
     

   } catch(error){
    res.json({error:"internal server"});
    console.log(error);
   }


} module.exports = subCategoryController;