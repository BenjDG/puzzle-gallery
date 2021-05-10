const { User } = require('../models');

const register = async function (req, res) {
  try {
    const user = new User({ username: req.body.username });
    await user.setPassword(req.body.password);
    await user.save();
  }
  catch (err) {
    console.log(`error inside save ${err}`);
    res.sendStatus(500);
  }
  finally {
    res.sendStatus(200);
  }
};

const login = async function (req, res) {
  res.json({
    id: req.user.id,
    username: req.user.username
  })
};

const logout = function (req, res) {
  req.session.destroy();
  res.end();
};

exports.login = login;
exports.register = register;
exports.logout = logout;