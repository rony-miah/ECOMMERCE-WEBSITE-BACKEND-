const express = require("express");
const { secureProduct, createProductController, createProductVariantController } = require("../../Controller/productController");
const router = express.Router();

router.post("/createproduct", secureProduct, createProductController);
router.post("/createproductvariant", createProductVariantController)

module.exports = router;