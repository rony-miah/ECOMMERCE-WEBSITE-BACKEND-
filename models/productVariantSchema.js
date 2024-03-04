const mongoose = require("mongoose");
const { Schema } = mongoose;

const productVariantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    quantity: String,
    product: {
        type: Schema.Types.ObjectId,
        ref: "ProductList",
    },
    created: {
        type: Date,
        default: new Date(),
    },
    update: {
        type: Date,
    }
});

module.exports = mongoose.model("ProductVariantList", productVariantSchema);