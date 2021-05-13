const db = require('../models');
const fs = require('fs');


// Defining methods for the puzzleController
module.exports = {
  findAll: function (req, res) {
    db.Puzzle
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  save: (function (req, res) {
    // console.log(req);
    console.log(req.file);
    console.log(req.body);
    // db.Puzzle
    //   .create(req.body)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
    res.sendStatus(200);
  }),
  remove: function (req, res) {
    db.Puzzle
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
