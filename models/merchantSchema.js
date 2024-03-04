const mongoose = require("mongoose");
const { Schema } = mongoose;

const merchantSchema = new Schema({
  storename: {
    type: String,
    required: true,
  },
  officialemail: {
    type: String,
    required: true,
  },
  officialphone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    res: "UserList",
  },
  products: {
    type: Schema.Types.ObjectId,
    res: "Product",
  },
  created: {
    type: Date,
    default: new Date(),
  },
  update: {
    type: Date,
  }
});

module.exports = mongoose.model("MerchantList", merchantSchema);