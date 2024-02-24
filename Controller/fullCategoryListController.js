const CategoryList = require("../models/categorySchema");
const SubCategoryList = require("../models/subCategorySchema");

// Get All Category List

async function getAllCategoryList(req, res) {
  const data = await CategoryList.find({}).populate("subCategory");
  res.json(data);
}

// Get All Sub-Category List

async function getAllSubCategoryList(req, res) {
  const data = await SubCategoryList.find({}).populate(
    "category: {name, status}"
  );
  res.json(data);
}

module.exports = { getAllCategoryList, getAllSubCategoryList };
