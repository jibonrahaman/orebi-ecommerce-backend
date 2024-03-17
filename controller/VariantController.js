const VariantSchema = require('../models/VariantSchema');
const ProductSchema = require('../models/ProductSchema');
const UploadCloudinary = require('../utils/UploadCloudinary');

async function VariantController(req, res) {
    try {
        
         // Destructure the file path from the request
         const localPath = req.file.path; 
        // Check if file is attached to the request
        if (!localPath) {
            return res.status(400).json("Please attach a file");
        }
        // Upload file to Cloudinary
        const {url} = await UploadCloudinary(localPath); 
           
        // Destructure necessary fields from request body
        const { ram, storage, color, price, size, quantity, productId, img } = req.body;

        // Check for required fields
        //   if(price == " " || !price){
        //     return res.status(400).json("please give Variant Price")
        //    }else if(quantity == " " || !quantity){
        //     return res.status(400).json("please give Variant Quantity")
        //    }else if(productId == " " || !productId){
        //     return res.status(400).json("please give  Product Id")
        //    }
          
         
        // Create new variant instance
        const variant = new VariantSchema({ ...req.body, img:url});

        // Save variant to the database
        await variant.save();
  
        // Update corresponding product with the new variant
        await ProductSchema.findOneAndUpdate(
            { _id: productId },
            { $push: { variants: variant._id } },
            { new: true }
        );
        // Respond with success message and the created variant
        res.status(201).json({ message: "Variant created successfully", variant });
    } catch (error) {
        // Handle errors
        console.error("VariantController error:", error);
        res.status(500).json({ error: "Server error occurred" });
    }
}

module.exports = VariantController;
