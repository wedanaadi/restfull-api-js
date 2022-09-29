"use strict";
const express = require("express");
const auth = require("../controllers/authController.js");
const router = express.Router();
const rule = require("../validations/authValidation.js");
const validate = require("../middlewares/validate.js");

router.post("/register", rule, validate, auth.register);
router.post("/login", rule, validate, auth.login);

module.exports = router;
