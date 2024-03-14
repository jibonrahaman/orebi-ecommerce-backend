const mongoose = require("mongoose");
const {Schema} =mongoose;

const VariantSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
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