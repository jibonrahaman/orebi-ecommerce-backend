const mongoose = require ("mongoose");
const {Schema} =mongoose;

const subCategorySchema =new Schema({
    namae:{
        type:String,
        required:true
     },
     description:String,
     subCategory:[
        {
        type:Schema.Types.ObjectId,
        ref:'CategoryList'
         }
    ]
     ,
     isActive:{
        type:Boolean,
        default:false
     },
     status:{
        type:String,
        default:"waiting",
        enum:['waiting','rejected','approved']
     },
     created:{
        type:Date,
        default:new Date()
     },
     update:{
        type:Date
     }
})
module.exports = mongoose.model("SubCategoryList", subCategorySchema)