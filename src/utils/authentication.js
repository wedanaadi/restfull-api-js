const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const passwordHash = (plainText) => {
  return bcrypt.hash(plainText, 10);
};

const passwordCompare = async (plainText, encryptText) => {
  const result = await bcrypt.compare(plainText, encryptText);
  return result;
};

const generateToken = (username, loginTime, fullname) => {
  const secretKey = process.env.JWT_KEY || "SECRET";
  const token = jwt.sign({ username, loginTime, fullname }, secretKey, {
    expiresIn: '30s',
  });
  return token;
};

const generateRefreshToken = (username, loginTime, fullname) => {
  const secretKey = process.env.JWT_REFRESH || "SECRET";
  const token = jwt.sign({ username, loginTime, fullname }, secretKey, {
    expiresIn: '1d',
  });
  return token;
};

module.exports = {
  passwordHash,
  passwordCompare,
  generateToken,
  generateRefreshToken,
};
