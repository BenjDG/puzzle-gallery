const multer = require('multer');
const upload = multer({ dest: './uploads'});
const db = require('../models');
const fs = require('fs');

const type = upload.single('picFile');

// Defining methods for the puzzleController
module.exports = {
  findAll: function (req, res) {
    db.Puzzle
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  save: (type ,function (req, res) {
    console.log(req);
    console.log(req.file);
    console.log(req.body);
    // db.Puzzle
    //   .create(req.body)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  }),
  remove: function (req, res) {
    db.Puzzle
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
