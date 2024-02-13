const BecomeMerchantSchema = require("../models/BecomeMerchantSchema");
const signUpSchema = require("../models/signUpSchema");

async function BecomeMerchant(req, res) {
    
      try{
        const { storeName, officialEmail, phoneNumber, adress, owner, product } = req.body;
        if (storeName == " " || !storeName) {
            return res.status(400).json("storeName is required");
        } else if (officialEmail == " " || !officialEmail) {
            return res.status(400).json("officialEmail is required");
        } else if (phoneNumber == " " || !phoneNumber) {
            return res.status(400).json("phoneNumber is required");
        } else if (adress == " " || !adress) {
            return res.status(400).json("adress is required");
        } else if (owner == "" || !owner) {
            return res.status(400).json("Please provide your signUp ID");
        }
        
        try{
            const foundUser = await signUpSchema.findById(owner);
        if (foundUser) {
            if (foundUser.id == owner) {
                const merchant = new BecomeMerchantSchema({
                    storeName,
                    officialEmail,
                    phoneNumber,
                    adress,
                    owner,
                    product
                })
                merchant.save();
                res.json({ succes: "Merchant successfully registered" })
    
                const ownerUpdate = await signUpSchema.findOneAndUpdate(
                    { _id: owner },
                    { role: "merchant" },
                    { new: true }
                )
            }           
        } 
    }catch(error){
            res.json("Please provide your correct owner id")
        }
      }catch (error){
        console.error("Error in BecomeMerchant:", error);
        res.status(500).json({ error: "An error occurred while becoming a merchant" });
      }

}
module.exports = BecomeMerchant;