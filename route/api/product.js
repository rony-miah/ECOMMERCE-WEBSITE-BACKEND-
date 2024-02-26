const express = require("express");
const { secureProduct, createProduct } = require("../../Controller/productController");
const router = express.Router();

router.post("/createproduct", secureProduct, createProduct);

module.exports = router;