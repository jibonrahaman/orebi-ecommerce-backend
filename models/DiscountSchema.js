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
        type:String
    },
    ProductId:{
        type:Schema.Types.ObjectId,
        ref:"Product"
    },
    CategoryId:{
        type:Schema.Types.ObjectId,
        ref:"CategoryList"
    },
    subCategory:
        {
           type:Schema.Types.ObjectId,
            ref:'SubCategoryList'
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