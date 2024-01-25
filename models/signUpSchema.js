const mongoose =require("mongoose");
const {Schema} =mongoose;

const signUpSchema = new Schema({
    FirstName:String,
    LastName:String,
    EmailAdress:{
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
  })
  module.exports =mongoose.model("registraion-datas",signUpSchema)