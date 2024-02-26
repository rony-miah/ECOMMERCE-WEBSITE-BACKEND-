const express = require("express");
const becomeMerchant = require("../../Controller/merchantController");
const router = express.Router();

router.post("/becomemerchant", becomeMerchant);

module.exports = router;