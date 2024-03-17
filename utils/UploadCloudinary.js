const cloudinary = require("cloudinary").v2;
const fs = require('fs'); 
cloudinary.config({ 
  cloud_name: (process.env.cloud_name), 
  api_key: (process.env. api_key), 
  api_secret: (process.env.api_secret)
});

const UploadCloudinary =async (localpath)=>{
    try {
        const UploadImg =  await cloudinary.uploader.upload(localpath,(res)=>res)
        fs.unlinkSync(localpath)
        return UploadImg
        } catch (error) { 
            fs.unlinkSync(localpath)
         console.log("UploadCloudinary catch error" ,error);
        }
}

module.exports = UploadCloudinary;