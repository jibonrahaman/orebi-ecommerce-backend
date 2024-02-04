 const CategorySchema = require('../models/CategorySchema')
async function CategoryStatusController (req,res){
    const {name,status} =req.body;
    if( status == 'waiting' || status == 'rejected'){
        const updateCategoryStatus = await CategorySchema.findOneAndUpdate(
            {name},
            {$set:{isActive:false,status:status}},
            {new:true}
        )
        res.json(updateCategoryStatus)

    }else if(status == 'approved'){
        const updateCategoryStatus = await CategorySchema.findOneAndUpdate(
            {name},
            {$set:{isActive:true,status:status}},
            {new:true}
        )
        res.json(updateCategoryStatus)
    }
     

} module.exports = CategoryStatusController;