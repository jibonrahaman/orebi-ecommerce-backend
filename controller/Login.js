 const userList =require ('../models/signUpSchema')
async function login(req,res){
 const {Email,Password} = req.body;
 try{
     const userData = await userList.findOne({Email})
     if(userData){     
        console.log(userData.Email);
        if(userData.Email == Email){
            res.json({message:"Login successfull"})
         }
         else{
            // Email not match 
            res.status(401).json({error: "Invalid Email"})
         }

        
        // if(userData.Password == Password){
        // res.json({ message: "Login successful" });
        // }
        // else {
        //     // Password doesn't match
        //     res.status(401).json({ error: "Invalid password" });
        // }

     }
     else {
        // User not found
        res.status(404).json({ error: "User not found" });
    }

 }
 catch(error){
    console.log("Error during login:", error);
    res.status(500).json({ error: "Internal server error" });
 }


}
module.exports =login