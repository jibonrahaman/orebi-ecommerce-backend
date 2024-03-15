const mongoose = require("mongoose");
const {Schema} =mongoose;

const VariantSchema = new Schema ({
   color:{
    type:String
   },
   ram:{
    type:String
   },
   storage:{
    type:String
   },
   size:{
    type:String
   },
   img:{
    type:String
   },
   price: {
        type:String       
    },
    quantity :{
        type:String
    },
    product:{
        type:Schema.Types.ObjectId,
        ref:"Product"
    },
    created:{
        type:Date,
        default:new Date()
    },
    updated:{
        type:Date
    }
})
module.exports = mongoose.model("Variant",VariantSchema);