const mongoose = require("mongoose");
const { Schema } = mongoose;

const signUpSchema = new Schema({

    Firstname: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    MobileNumber: {
        type: String,
    },
    // PresentAdress: {
    //     type: String,
    // },
    // City: {
    //     type: String,
    // },
    // PostCode: {
    //     type: String,
    // },
    // Country: {
    //     type: String,
    // },
    // Region: {
    //     type: String,
    // },
    Password: {
        type: String,
        required: true
    },
    Verify: {
        type: Boolean,
        default: false
        },
    role: {
        type: String,
        default: "member",
        enum: ["member", "admin", "merchant"]
    }
})
module.exports = mongoose.model("signupdatas", signUpSchema)