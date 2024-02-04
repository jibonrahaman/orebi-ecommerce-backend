const mongoose =require ("mongoose");
const {Schema} = mongoose;

const CategorySchema = new Schema ({
 namae:{
    type:String,
    required:true
 },
 description:String,
 category:{
  type:Schema.Types.ObjectId,
  ref:"SubCategoryList"
 },
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
module.exports =mongoose.model("CategoryList", CategorySchema)