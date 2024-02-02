const express = require("express");
const registrationController = require("../../Controller/registrationController");
const emailVerificationController = require("../../Controller/emailVerificationController");
const loginController = require("../../Controller/loginController");
const router = express.Router();

router.post('/registration', registrationController);
router.post('/verification', emailVerificationController);
router.post('/login', loginController);

module.exports = router;