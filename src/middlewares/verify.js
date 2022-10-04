require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_KEY, (err) => {
      if(err) {
        return res.status(500).json({
          errors: err,
        });
      } else {
        next()
      }
    });
  } else {
    return res.status(401).json({
      errors: "Token requred!",
    });
  }
};

module.exports = verifyToken;
