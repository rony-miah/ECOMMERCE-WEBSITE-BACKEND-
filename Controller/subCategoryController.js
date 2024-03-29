const CategoryList = require("../models/categorySchema");
const SubCategoryList = require("../models/subCategorySchema");

async function subCategoryController(req, res) {
  const { name, description, category } = req.body;
  const duplicateSubCategory = await SubCategoryList.find({ name });
  if (duplicateSubCategory.length > 0) {
    res.json({ error: "Already this sub-category created, try again!" });
  }
  const subCategory = new SubCategoryList({
    name,
    description,
    category,
  });
  // console.log(subCategory._id);
  // console.log(subCategory.category);
  await CategoryList.findOneAndUpdate(
    { _id: subCategory.category },
    { $push: { subCategory: subCategory._id } },
    { new: true }
  );
  res.json({ success: "Sub-category has been created successfully!" });
  subCategory.save();
}

// subCategoryStatusController

async function subCategoryStatusController(req, res) {
  const { name, status } = req.body;
  if (status == "waiting" || status == "rejected") {
    const updateSubCategory = await SubCategoryList.findOneAndUpdate(
      { name },
      { isActive: false, status: status },
      { new: true }
    );
  } else if (status == "approved") {
    const updateSubCategory = await SubCategoryList.findOneAndUpdate(
      { name },
      { isActive: true, status: status },
      { new: true }
    );
  }
  res.json({ success: "Sub-category status has been updated successfully!" });
}

module.exports = { subCategoryController, subCategoryStatusController };
