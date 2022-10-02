const db = require("../db/models");
const User = db.User;

const checkUsername = async (value) => {
  const user = await User.findOne({ where: { username: value } });
  if (user) {
    return Promise.reject("Username already in use");
  }
};

const { check } = require("express-validator");
const validationLogin = [
  check("username").notEmpty().withMessage("Username must be required"),
  check("password").notEmpty().withMessage("Password must be required"),
];

const validationRegister = [
  check("username")
    .notEmpty()
    .withMessage("Username must be required")
    .custom((value) => checkUsername(value)),
  check("password").notEmpty().withMessage("Password must be required"),
  check("fullname").notEmpty().withMessage("Fullname must be required"),
];

module.exports = {
  validationLogin,
  validationRegister,
};
