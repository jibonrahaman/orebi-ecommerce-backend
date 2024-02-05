const subCategorySchema = require("../models/subCategorySchema");

async function SubCategoryStatus (req,res){
  const {name,status} =req.body;
   if(status == 'waiting' || status == "rejected"){
    const updateSubCategoryStatus = await subCategorySchema.findOneAndUpdate(
        {name},
        {$set:{isActive:false,status:status}},
        {new:true}
    )
   }else if (status == "approved"){
    const updateCategoryStatus = await subCategorySchema.findOneAndUpdate()
   }
} 
module.exports = SubCategoryStatus;