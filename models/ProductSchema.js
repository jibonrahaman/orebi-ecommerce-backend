const mongoose =require("mongoose");
const {Schema} = mongoose;
const ProductSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    description : {
        type:String,
        required:true  
    },
    price : {
        type:String,
        required:true
    },
    Variant:[
        {
            type:Schema.Types.ObjectId,
            ref:"Variant"
        }
    ],
    Store:{
     type:Schema.Types.ObjectId,
     ref:"Store"
    },
    img:{
        type: String
    },
    created:{
        type:Date,
        default:new Date()
    },
    updated: {
        type:Date
    }

})
module.exports = mongoose.model("Product",ProductSchema)