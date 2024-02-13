function secureMerchant (req,res,next){
 const userId =  (req.headers.authorization.split('@')[1])
}
module.exports = secureMerchant;