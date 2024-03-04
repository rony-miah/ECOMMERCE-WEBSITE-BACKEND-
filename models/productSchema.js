const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    variants: [
        {
            type: Schema.Types.ObjectId,
            ref: "ProductVariantList"
        }
    ],
    store: {
        type: Schema.Types.ObjectId,
        res: "MerchantList",
    },
    created: {
        type: Date,
        default: new Date(),
    },
    update: {
        type: Date,
    }
});

module.exports = mongoose.model("ProductList", productSchema);