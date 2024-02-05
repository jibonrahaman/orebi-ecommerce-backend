const CategorySchema = require('../models/CategorySchema')
async function CategoryController(req, res) {
    const { name, description } = req.body;
    try {
        const existingCategory = await CategorySchema.find({ name })
        if(existingCategory.length > 0) {
            res.json({ error: "This Category is already exist" })
        }else{
            // Create a new category instance
            const category = new CategorySchema({
                name,
                description
            });       
            // Respond with success message
            res.json({ success: "Category Created Successfully" });

            // Save the category to the database
            category.save();
        }
       

    }  catch (error) {
        // Handle any errors that occur during the process
        console.error("Error creating category:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }



}
module.exports = CategoryController