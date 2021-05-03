const passport = require('../config/passport');
const { User } = require('../models');

const login = async function (req, res) {

};

const register = async function (req, res, next) {
  console.log('register triggered');
  console.log(`req.body.username`, req.body.username);
  console.log(`req.body.password`, req.body.password);
  User.register({username: req.body.username}, req.body.password, function (err, _user){
    if (err) {
      console.dir(err);
      res.send(err);
      //const errObj = new Error(err);
      //res.status(500).send(err);
    } else {
      passport.authenticate('local');
      res.status(200);
    }
  })
};

const logout = function (req, res) {
  req.session.destroy();
  res.end();
};

exports.login = login;
exports.register = register;
exports.logout = logout;