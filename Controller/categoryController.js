const CategoryList = require("../models/categorySchema");

async function createCategoryController(req, res) {
  const { name, description } = req.body;
  const duplicateCategory = await CategoryList.find({ name });
  if (duplicateCategory.length > 0) {
    res.json({ error: "Already this category created, try again!" });
  }
  const category = new CategoryList({
    name,
    description,
  });
  res.json({ success: "Category has been created successfully!" });
  category.save();
}

// categoryStatusController

async function categoryStatusController(req, res) {
  const { name, status } = req.body;
  if (status == "waiting" || status == "rejected") {
    const updateCategory = await CategoryList.findOneAndUpdate(
      { name },
      { $set: { isActive: false, status: status } },
      { new: true }
    );
  } else if (status == "approved") {
    const updateCategory = await CategoryList.findOneAndUpdate(
      { name },
      { $set: { isActive: true, status: status } },
      { new: true }
    );
  }
}

module.exports = { createCategoryController, categoryStatusController };
