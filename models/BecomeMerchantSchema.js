const mongoose = require("mongoose");
const { Schema } = mongoose;

const MerchantSchema = new Schema({

    storeName: {
        type: String,
        required: true
    },
    officialEmail: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "signupdatas"
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: product
    }


})
module.exports = mongoose.model("merchant", MerchantSchema)