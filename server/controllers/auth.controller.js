const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const register = async (req, res, next) => {
  try {
    const { email, username, password, confirmpassword } = req.body;

    if (password !== confirmpassword) {
      return res
        .status(400)
        .json({ message: "Password and confirmpassword don't match" });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser.id }, JWT_SECRET, { expiresIn: "1h" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      message: "User created successfully",
      user: newUser,
      token: token,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  res.send("login User");
};

const logout = async (req, res, next) => {
  res.send("logout User");
};

const currentUser = async (req, res, next) => {
  res.send("current User");
};

module.exports = {
  register,
  login,
  logout,
  currentUser,
};
