const express = require("express");
const {
  createCategoryController,
  categoryStatusController,
} = require("../../Controller/categoryController");
const router = express.Router();

router.post("/createcategory", createCategoryController);
router.post("/categorystatus", categoryStatusController);

module.exports = router;
