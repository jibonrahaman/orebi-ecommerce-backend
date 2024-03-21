const mongoose  = require("mongoose");
const {Schema} = mongoose;

const DiscountSchema = new Schema ({
    cash:{
        type:String
    },
    percent:{
        type:String
    },
    flat:{
        type:Boolean,
        default:false
    },
    status: {
        type: String,
        default: "waiting",
        enum: ['waiting', 'rejected', 'approved']
     },
    ProductId:{
        type:Schema.Types.ObjectId,
        ref:"Product"
    },
    CategoryId:{
        type:Schema.Types.ObjectId,
        ref:"CategoryList"
    },
    SubCategoryId:
        {
           type:Schema.Types.ObjectId,
            ref:'SubCategoryList'
        },
        VariantId:
        {
           type:Schema.Types.ObjectId,
            ref:'Variant'
        },
        created:{
            type:Date,
            default:new Date()
        },
        updated:{
            type:Date
        }
})
module.exports = mongoose.model("Discount",DiscountSchema)