const MerchantList = require("../models/merchantSchema");
const UserList = require("../models/userSchema");

async function becomeMerchant(req, res) {
  const { storename, officialemail, officialphone, address, owner, products } = req.body;
  if (!storename) {
    return res.send({ error: "Storename is required" })
  }
  if (!officialemail) {
    return res.send({ error: "Officialemail is required" })
  }
  if (!officialphone) {
    return res.send({ error: "Officialphone is required" })
  }
  if (!address) {
    return res.send({ error: "Address is required" })
  }
  if (!owner) {
    return res.send({ error: "Owner is required" })
  }
  if (!products) {
    return res.send({ error: "Product is required" })
  }
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