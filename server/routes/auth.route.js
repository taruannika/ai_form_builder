const express = require("express");
const {
  register,
  login,
  logout,
  currentUser,
} = require("../controllers/auth.controller");
const AuthMiddleware = require("../utils/auth.middleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/current-user", AuthMiddleware, currentUser);

module.exports = router;
