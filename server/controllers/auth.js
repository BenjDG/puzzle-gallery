const login = async (req, res) => {
  res.json({
    username: req.user.username
  });
};

const logout = function (req, res) {
  req.session.destroy();
  res.end();
};

exports.login = login;
exports.logout = logout;