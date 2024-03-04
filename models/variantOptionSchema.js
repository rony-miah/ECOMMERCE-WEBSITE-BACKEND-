const mongoose = require("mongoose");
const { Schema } = mongoose;

const variantOptionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: new Date(),
    },
    update: {
        type: Date,
    }
});

module.exports = mongoose.model("VariantOption", variantOptionSchema);