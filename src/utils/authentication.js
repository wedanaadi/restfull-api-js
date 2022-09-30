const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const passwordHash = (plainText) => {
  return bcrypt.hash(plainText, 10);
};

const passwordCompare = async (plainText, encryptText) => {
  const result = await bcrypt.compare(plainText, encryptText);
  return result;
};

const generateToken = (username, loginTime) => {
  const secretKey = process.env.JWT_KEY || "SECRET";
  const token = jwt.sign({ username, loginTime }, secretKey, {
    expiresIn: '60m',
  });
  return token;
};

module.exports = {
  passwordHash,
  passwordCompare,
  generateToken,
};
