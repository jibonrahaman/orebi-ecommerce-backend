const subCategorySchema = require("../models/subCategorySchema");

async function SubCategoryStatus (req,res){
  const {name,status} =req.body;
   if(status == 'waiting' || status == "rejected"){
    const updateSubCategoryStatus = await subCategorySchema.findOneAndUpdate(
        {name},
        {$set:{isActive:false,status:status}},
        {new:true}
        
    )
    res.json(updateSubCategoryStatus)
}else if (status == "approved"){
    const updateSubCategoryStatus = await subCategorySchema.findOneAndUpdate(
        {name},
        {$set:{isActive:true,status:status}},
        {new:true}
        )
        res.json(updateSubCategoryStatus)
    }
} 
module.exports = SubCategoryStatus;