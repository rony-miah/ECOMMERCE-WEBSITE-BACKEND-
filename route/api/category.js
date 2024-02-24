const express = require("express");
const {
  createCategoryController,
  categoryStatusController,
} = require("../../Controller/categoryController");
const {
  subCategoryController,
  subCategoryStatusController,
} = require("../../Controller/subCategoryController");
const {
  getAllCategoryList,
  getAllSubCategoryList,
} = require("../../Controller/fullCategoryListController");

const router = express.Router();

router.post("/createcategory", createCategoryController);
router.post("/categorystatus", categoryStatusController);
router.post("/createsubcategory", subCategoryController);
router.post("/subcategorystatus", subCategoryStatusController);
router.get("/getallcategory", getAllCategoryList);
router.get("/getallsubcategory", getAllSubCategoryList);

module.exports = router;
