const { body } = require("express-validator");
const validation = [
  body("employe_name")
    .notEmpty()
    .withMessage("Employe Name must be required")
    .isString()
    .withMessage("Employe Name must be required")
    .isLength({ min: 3 })
    .withMessage("must be at least 3 chars long"),
  body("employe_role")
    .notEmpty()
    .withMessage("Must be required")
    .isIn(["enginner", "hrd", "analis"])
    .withMessage("Must be enginner, hrd or analis"),
  body("employe_phone_number")
    .notEmpty()
    .withMessage("Must be required")
    .isNumeric()
    .withMessage("Must be numeric")
    .isLength({ min: 6 })
    .withMessage("must be at least 6 chars long"),
  body("employe_address")
    .notEmpty()
    .withMessage("Must be required")
    .isLength({ min: 2 })
    .withMessage("must be at least 2 chars long"),
];

module.exports = validation;
