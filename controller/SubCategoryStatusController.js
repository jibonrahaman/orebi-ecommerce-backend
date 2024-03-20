const subCategorySchema = require("../models/subCategorySchema");

async function SubCategoryStatus (req,res){
     try{
        const {name,status} =req.body;
        // Check the status and update accordingly
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
         }else {
            // Handle invalid status
            return res.status(400).json({ error: 'Invalid status' });
          }
              // Respond with the updated subcategory status
              res.json(updateSubCategoryStatus)
     }catch(error){
        // Handle any errors that occur during the process
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });

     }
} 
module.exports = SubCategoryStatus;