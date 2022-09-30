"use strict";
const express = require("express");
const auth = require("../controllers/authController.js");
const router = express.Router();
const {validationLogin, validationRegister} = require("../validations/authValidation.js");
const validate = require("../middlewares/validate.js");

router.post("/register", validationRegister, validate, auth.register);
router.post("/login", validationLogin, validate, auth.login);

module.exports = router;
