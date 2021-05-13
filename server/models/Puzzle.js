const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puzzleSchema = new Schema({
  fieldname: { type: String, required: true },
  originalname: { type: String, required: true },
  encoding: { type: String, required: true },
  mimetype: { type: String, required: true },
  destination: { type: String, required: true },
  filename: { type: String, required: true },
  path: { type: String, required: true },
  size: { type: Number, required: true }
});

const Puzzle = mongoose.model('Puzzle', puzzleSchema);

module.exports = Puzzle;
