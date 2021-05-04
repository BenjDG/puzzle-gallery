const { User } = require('../models');

const register = async function (req, res) {
  try {
    const user = new User({ username: req.body.username });
    await user.setPassword(req.body.password);
    await user.save();
  }
  catch (err) {
    console.log(`error inside save ${err}`);
    res.status(500).send(err);
  }
};

const login = async function (req, res) {
  //code block under construction
  console.log(`login!!!!!`);
};

const logout = function (req, res) {
  req.session.destroy();
  res.end();
};

exports.login = login;
exports.register = register;
exports.logout = logout;