const ProductList = require("../models/productSchema");
const ProductVariantList = require("../models/productVariantSchema");
const UserList = require("../models/userSchema");

async function secureProduct(req, res, next) {
    // console.log(req.headers.authorization.split('@'));
    const userId = req.headers.authorization.split('@')[1];
    const password = req.headers.authorization.split('@')[2];
    // console.log(userId, password);
    if (!req.headers.authorization) {
        res.json({ error: "Unauthorized" });
    } else {
        const user = await UserList.find({ _id: userId });
        // console.log(user.length);
        if (user.length > 0) {
            if (password == "e!8/ekV18e*K") {
                // console.log(user[0].role);
                if (user[0].role == "merchant") {
                    // console.log("u can upload");
                    next();
                }
            } else {
                res.json({ error: "You aren't able to upload" });
            }
        } else {
            res.json({ error: "You can't upload your product" });
        }
    }

}

function createProductController(req, res) {
    const { name, description, image, store } = req.body;
    // console.log(name, description, image, store);
    if (!name) {
        return res.send({ error: "Name is required" })
    }
    if (!description) {
        return res.send({ error: "Description is required" })
    }
    if (!image) {
        return res.send({ error: "Image is required" })
    }
    if (!store) {
        return res.send({ error: "Store is required" })
    }
    const product = new ProductList({
        name,
        description,
        image,
        store
    });
    product.save();
    res.json({ success: "product created successfully!" });
}

async function createProductVariantController(req, res) {
    const { name, description, price, quantity, product } = req.body;
    const variant = new ProductVariantList({
        name,
        description,
        price,
        quantity,
        product
    });
    // console.log(variant._id);
    // console.log(variant.product);
    variant.save();
    await ProductList.findOneAndUpdate(
        { _id: variant.product },
        { $push: { variants: variant._id } },
        { new: true }
    )
    res.json({ success: "Variant created successfully!" });
}

module.exports = { secureProduct, createProductController, createProductVariantController };