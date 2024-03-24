const BecomeMerchantSchema = require("../../models/BecomeMerchantSchema")
async function GetStore (req,res){
 try {
    const Store = await BecomeMerchantSchema.find({})
    res.status(200).json(Store)
 } catch (error) {
    console.log("error",error);
 }
}
module.exports = GetStore;