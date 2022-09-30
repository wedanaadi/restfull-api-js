const { check } = require("express-validator");
const validationLogin = [
  check("username").notEmpty().withMessage("Username must be required"),
  check("password").notEmpty().withMessage("Password must be required"),
];

const validationRegister = [
  check("username").notEmpty().withMessage("Username must be required"),
  check("password").notEmpty().withMessage("Password must be required"),
  check("fullname").notEmpty().withMessage("Fullname must be required"),
];

module.exports = {
  validationLogin,
  validationRegister,
};
