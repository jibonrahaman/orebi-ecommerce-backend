const ProductSchema = require("../models/ProductSchema");
const signUpSchema = require("../models/signUpSchema");

async function productMidleware(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        const userId = authHeader.split('@')[1];
        const userPass = authHeader.split('@')[2];

        if (!authHeader) {
            return res.status(401).json({ error: "Authorization header missing" });
        }

        const user = await signUpSchema.find({ _id: userId });
        if (user.length > 0) {
            if (user[0].role == 'merchant' && userPass == "6yniFSsNZ8iGg4t") {
                next();
            } else {
                return res.status(401)({ error: 'Unauthorized' })
            }
        } else {
            return res.status(401).json({ success: "User not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

function productController(req, res) {

    try {
        const { name, description, price, img, Store } = req.body
        if (name == "" || !name) {
            return res.status(400).json("please give ProductName")
        } else if (description == "" || !description) {
            return res.status(400).json("please give ProductDescription")
        } else if (price == "" || !price) {
            return res.status(400).json("please give ProductPrice")
        }

        const Products = new ProductSchema({
            name, description, price, img, Store
        })
        Products.save()
        // Respond with success message or product details
        res.status(201).json({ message: "Product created successfully", Products });

    } catch (error) {
        res.json({ error: "ProductController server error", error })
    }


}
module.exports = { productMidleware, productController }; 
