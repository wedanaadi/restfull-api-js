const db = require("../db/models");
const User = db.User;
const jwt = require("jsonwebtoken");

const {
  passwordHash,
  passwordCompare,
  generateToken,
  generateRefreshToken,
} = require("../utils/authentication.js");

const register = async (req, res) => {
  const { username, password, fullname } = req.body;
  const passHash = await passwordHash(password);
  try {
    const user = await User.create({
      username,
      fullname,
      refreshToken: null,
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

  const token = await generateToken(user.username, Date.now(), user.fullname);
  const refreshToken = await generateRefreshToken(
    user.username,
    Date.now(),
    user.fullname
  );
  const userId = user.id;
  await User.update(
    { refreshToken },
    {
      where: { id: userId },
    }
  );

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    // secure: true,
  });

  return res.status(200).json({
    success: true,
    token,
  });
};

const logout = async (req, res) => {
  try {
    const cookieToken = req.cookies.refreshToken;
    if (!cookieToken) return res.sendStatus(204);
    const user = await User.findOne({ where: { refreshToken: cookieToken } });
    if (!user) return res.sendStatus(204);
    const userId = user.id;
    await User.update({ refreshToken: null }, { where: { id: userId } });
    res.clearCookie('refreshToken')
    res.status(200).json({
      success:true,
      msg:"logout Successfuly!"
    })
  } catch (error) {
    console.log(error);
    res.json({ msg: error }).status(422);
  }
};

const refreshToken = async (req, res) => {
  try {
    const cookieToken = req.cookies.refreshToken;
    if (!cookieToken) return res.sendStatus(401);
    const user = await User.findOne({ where: { refreshToken: cookieToken } });
    if (!user) return res.sendStatus(403);
    await jwt.verify(cookieToken, process.env.JWT_REFRESH, (err) => {
      if (err) return res.sendStatus(403);
      const accessToken = generateToken(
        user.username,
        Date.now(),
        user.fullname
      );
      return res.status(200).json({ token: accessToken });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register, login, logout, refreshToken };
