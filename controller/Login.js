 const userList =require ('../models/signUpSchema');
 const bcrypt= require("bcrypt");
const emailRegex = require('../emailRegex/emailRegex');
const signUpSchema = require('../models/signUpSchema');
async function login(req,res){
 const {Email,Password} = req.body; 
 try{
   const existEmail = await signUpSchema.find({Email}) 
         
   if(!Email){
      return res.send({error : "Email is required"})
   }else if(!existEmail){
      return res.send({error : "Email is not match"})
    }else if (!emailRegex(Email)){
      return res.send({error : "Email is not correct"})
   }else if (!Password){
      return res.send({error : "Password is required"})
   }else{
      const userData = await userList.find({Email})
      if(userData.length > 0){
        bcrypt.compare(Password, userData[0].Password).then(function(result){
          if(result){
           res.send({success : "Login Successfully",
           email:existEmail[0].Email,
           role: existEmail[0].role
         })
          }else{
           res.send({error : "Password is not valid"})
          }
        })
  
       }  
       }
    
 }
 catch(error){
    console.log("Error during login:", error);
    res.status(500).json({ error: "Internal server error" });
 }


}
module.exports =login