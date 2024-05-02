const jwt = require('jsonwebtoken');
const userList = require('../models/signUpSchema');
async function verifyEmailController (req,res){
    const {id} = req.params
    const decoded = jwt.verify(id, 'suhashine')
    
    if(decoded){
        const updateUsers =await userList.findOneAndUpdate(
            {Email : decoded.Email},
            {Verify : true},
            {new : true}    
            )
            res.json({success : "email verification done"})
    }else{
        res.json({success : "not done"})
    }
}
module.exports = verifyEmailController