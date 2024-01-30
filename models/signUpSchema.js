const mongoose =require("mongoose");
const {Schema} =mongoose;

const signUpSchema = new Schema({
   
    Firstname:{
        type:String,
        required:true
    }, 
       LastName:{
        type:String,
        required:true
    }, 
     Email:{
        type:String,
        required:true
    },
    MobileNumber:{
        type:String,
        required:true
    },
   PresentAdress:{
        type:String,
        required:true
    },
     City:{
        type:String,
        required:true
    },
     PostCode:{
        type:String,
        required:true
    },
     Country:{
        type:String,
        required:true
    },
     Region:{
        type:String,
        required:true
    },
      Password:{
        type:String,
        required:true
    },
    Verify:{
      type : Boolean,
      default :false

    }
  })
  module.exports =mongoose.model("signupdatas",signUpSchema)