const mongoose = require("mongoose");
const {Schema} = mongoose;

const MerchantSchema = new Schema ({

    storeName:{
        type:String,
        required:true
    },
    
})