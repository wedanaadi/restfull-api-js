require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_KEY, (err) => {
      if(err) {
        res.status(500).json({
          auth: false,
          msg: err,
        });
      } else {
        next()
      }
    });
  } else {
    res.status(401).json({
      auth: false,
      msg: "Token requred!",
    });
  }
};

module.exports = verifyToken;
