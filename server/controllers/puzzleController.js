const db = require('../models');
const fs = require('fs');


// Defining methods for the puzzleController
module.exports = {
  findAll: function (req, res) {
    console.log(req.query);
    console.log(`req.user.id`, req.user.id);

    db.Puzzle
      .find(req.query)
      .then(dbModel => {
        // console.log(dbModel);
        const pathArr = dbModel.map(obj => obj.path)

        console.log(pathArr);
        res.sendStatus(200);
      })
      .catch(err => res.status(422).json(err));
  },
  save: (function (req, res) {
    console.log(req.file);
    console.log(`req.user.id`, req.user.id);
    req.file.userid = req.user.id;
    console.log(`req.file`, req.file);
    db.Puzzle
      .create(req.file)
      .then(dbModel => {
        // console.log(`Success!! ${dbModel}`);
        // console.dir(dbModel);
        res.json(dbModel);
      })
      .catch(err => {
        console.error(err);
        res.status(422).json(err);
      });
    //res.sendStatus(200);
  }),
  remove: function (req, res) {
    db.Puzzle
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
