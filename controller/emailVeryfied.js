var jwt = require('jsonwebtoken');
const userList = require('../models/signUpSchema');
async function emailVeryfied (req,res){
  const {authorization} =req.headers
  console.log(authorization);
  const decoded = jwt.verify(authorization, 'suhashine')
   const updateUsers =await userList.findOneAndUpdate(
    {Email : decoded.Email},
    {Verify : true},
    {new : true}    
    )

}
module.exports =emailVeryfied