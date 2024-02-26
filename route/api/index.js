const express = require("express");
const router = express.Router();
const authRouter = require("./authentication");
const categoryRouter = require("./category");
const merchantRouter = require("./merchant");
const productRouter = require("./product");

const authApiRoute = process.env.AUTH_URL;
router.use(authApiRoute, authRouter);
router.use("/category", categoryRouter);
router.use("/merchant", merchantRouter);
router.use("/product", productRouter);

module.exports = router;
