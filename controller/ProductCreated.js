const signUpSchema = require("../models/signUpSchema");

async function productMidleware(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        const userId = authHeader.split('@')[1];
        const userPass = authHeader.split('@')[2];

        if (!authHeader) {
            return res.status(401).json({ error: "Authorization header missing" });
        }

        const user =await signUpSchema.find({_id : userId});      
        if (user.length > 0) {
            if (user[0].role == 'merchant' && userPass == "6yniFSsNZ8iGg4t") {
            // return res.status(200).json({ success: "Done!" });
            next();
            }else{
               return res.status(401)({error : 'Unauthorized'})
            }
        }else{
          return res.status(401).json({ success: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

function productController (req,res){
    res.json({succes : "product created"})
}
module.exports = {productMidleware,productController}; 
