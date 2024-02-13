const signUpSchema = require("../models/signUpSchema");

function secureMerchant (req,res,next){
 const userId =  (req.headers.authorization.split('@')[1]);
 const userPass =  (req.headers.authorization.split('@')[2]);
  
  try{
    if(!req.headers.authorization){
        res.json({error: "Unauthorization"})
    }else{
        const user = signUpSchema.find({_id : userId})
        console.log(user);
    }

  }catch(error){
    console.log(error);
  }

}
module.exports = secureMerchant;