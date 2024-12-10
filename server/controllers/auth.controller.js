const register = async (req, res, next) => {
  res.send("Register User");
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
