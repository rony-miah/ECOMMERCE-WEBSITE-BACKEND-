const MerchantList = require("../models/merchantSchema");
const UserList = require("../models/userSchema");

async function becomeMerchant(req, res) {
  const { storename, officialemail, officialphone, address, owner, products } = req.body;
  const merchant = new MerchantList({
    storename,
    officialemail,
    officialphone,
    address,
    owner,
    products
  });
  merchant.save();

  await UserList.findOneAndUpdate(
    { _id: owner },
    { role: "merchant" },
    { new: true }
  )
  //   res.json({success: "Congratulations! You are a merchant now"});
  res.json(merchant);
}

module.exports = becomeMerchant;