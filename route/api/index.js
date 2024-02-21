const express = require("express");
const router = express.Router();
const authRouter = require("./authentication");
const categoryRouter = require("./category");
const subCategoryRouter = require("./subCategory");

const authApiRoute = process.env.AUTH_URL;
router.use(authApiRoute, authRouter);
router.use("/category", categoryRouter);
router.use("/subcategory", subCategoryRouter);

module.exports = router;
