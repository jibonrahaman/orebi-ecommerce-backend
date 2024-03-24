const DiscountSchema = require("../models/DiscountSchema");
const ProductSchema = require("../models/ProductSchema");
const CategorySchema = require("../models//CategorySchema");
const subCategorySchema = require("../models/subCategorySchema");
const VariantSchema = require("../models/VariantSchema");
const { isValidObjectId } = require("mongoose");

async function DiscountController(req, res) {
    try {
        const { cash, percent, flat, status, ProductId, CategoryId, SubCategoryId, VariantId } = req.body;
        
        // Check if at least one ID is provided
        if (!CategoryId && !SubCategoryId && !ProductId && !VariantId) {
            return res.status(400).send({
                message: "Please provide the Id where you want to create a discount",
            });
        }

        // Validate and find the document for each provided ID
        if (ProductId) {
            if (!isValidObjectId(ProductId))
                return res.status(400).send({ message: "Invalid ProductId" });
            const validProduct = await ProductSchema.findById(ProductId);
            if (!validProduct) return res.status(400).send({ message: "Invalid ProductId" });
        }

        if (CategoryId) {
            if (!isValidObjectId(CategoryId))
                return res.status(400).send({ message: "Invalid CategoryId" });
            const validCategory = await CategorySchema.findById(CategoryId);
            if (!validCategory) return res.status(400).send({ message: "Invalid CategoryId" });
        }

        if (SubCategoryId) {
            if (!isValidObjectId(SubCategoryId))
                return res.status(400).send({ message: "Invalid SubCategoryId" });
            const validSubCategory = await subCategorySchema.findById(SubCategoryId);
            if (!validSubCategory) return res.status(400).send({ message: "Invalid SubCategoryId" });
        }

        if (VariantId) {
            if (!isValidObjectId(VariantId))
                return res.status(400).send({ message: "Invalid VariantId" });
            const validVariant = await VariantSchema.findById(VariantId);
            if (!validVariant) return res.status(400).send({ message: "Invalid VariantId" });
        }

        // Create a new discount document
        const createDiscount = new DiscountSchema({ ...req.body });
        await createDiscount.save();

        // If status is "waiting" or "rejected", update flat field
        if (status === "waiting" || status === "rejected") {
            const updatedSchema = await DiscountSchema.findOneAndUpdate(
                { _id: createDiscount._id },
                { $set: { flat: false, status: status } },
                { new: true }
            );
            return res.send(updatedSchema);
        } else if (status === "approved") {
            const updatedSchema = await DiscountSchema.findOneAndUpdate(
                { _id: createDiscount._id },
                { $set: { flat: true, status: status } },
                { new: true }
            );
            return res.send(updatedSchema);
        }

        // If everything is successful, return a success response
        return res.status(200).send({ message: "Discount created successfully" });
    } catch (error) {
        console.log("DiscountSchema", error);
        return res.status(500).send({ message: "Internal server error" });
    }
}

module.exports = DiscountController;
