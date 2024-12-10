const express = require("express");
const {
  register,
  login,
  logout,
  currentUser,
} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/current-user", currentUser);

module.exports = router;
