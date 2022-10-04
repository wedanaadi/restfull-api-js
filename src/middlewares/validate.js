const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // const extractedErrors = [];
    // errors.array().map(error=>extractedErrors.push({[error.param]:error.msg}))
    let extractedErrors = errors.array().reduce(function (r, a) {
        r[a.param] = r[a.param] || [];
        r[a.param].push(a.msg);
        return r;
    }, Object.create(null));

    return res.status(400).json({ errors: extractedErrors });
  }
  next();
};

module.exports = validate;
