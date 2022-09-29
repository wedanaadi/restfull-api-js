const {check} = require('express-validator')
const validation = [
  check('username')
  .notEmpty()
  .withMessage("Username must be required"),
  check('password')
  .notEmpty()
  .withMessage("Password must be required"),
]

module.exports = validation;