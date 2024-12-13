const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const AuthMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "No token" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "No user" });
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = AuthMiddleware;
