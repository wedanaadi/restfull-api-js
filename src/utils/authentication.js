const bcrypt = require("bcrypt");

const passwordHash = plainText => {
  return bcrypt.hash(plainText,10)
};

const passwordCompare = async (plainText, encryptText) => {
  const result = await bcrypt.compare(plainText,encryptText)
  return result;
};

module.exports = {
  passwordHash,
  passwordCompare,
};
