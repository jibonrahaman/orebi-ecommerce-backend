const BecomeMerchantSchema = require("../models/BecomeMerchantSchema");
const signUpSchema = require("../models/signUpSchema");

async function BecomeMerchant (req,res){
    
  const {storeName,officialEmail,phoneNumber,adress,owner,product}=req.body;
    const merchant = new BecomeMerchantSchema({
        storeName,
        officialEmail,
        phoneNumber,
        adress,
        owner,
        product       
    })
    merchant.save();
    res.json({succes:"merchant succesfully"})
    
    const ownerUpdate = await signUpSchema.findOneAndUpdate(
        {_id:owner},
        {role:"merchant"},
        {new:true}
    )
    
}
module.exports = BecomeMerchant;