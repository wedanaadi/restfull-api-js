const db = require("../db/models");
const User = db.User;
const {
  passwordHash,
  passwordCompare,
  generateToken,
} = require("../utils/authentication.js");

const register = async (req, res) => {
  const { username, password, fullname } = req.body;
  const passHash = await passwordHash(password);
  try {
    const user = await User.create({
      username,
      fullname,
      password: passHash,
    });
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(422).json(error);
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({
    where: {
      username,
    },
  });
  if (!user) {
    return res.status(404).json("username not found");
  }
  const match = await passwordCompare(password, user.password);
  if (!match) {
    return res.status(401).json("password wrong");
  }

  const token = await generateToken(user.username, Date.now());
  return res.status(200).json({
    success: true,
    token,
  });
};

module.exports = { register, login };
