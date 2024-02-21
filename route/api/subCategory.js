const express = require("express");
const {
  subCategoryController,
  subCategoryStatusController,
} = require("../../Controller/subCategoryController");
const router = express.Router();

router.post("/createsubcategory", subCategoryController);
router.post("/subcategorystatus", subCategoryStatusController);

module.exports = router;
