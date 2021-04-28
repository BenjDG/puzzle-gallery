const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puzzleSchema = new Schema({
  thumbnailUUID: { type: String, required: true },
  date: { type: String, required: true }
});

const Puzzle = mongoose.model('Puzzle', puzzleSchema);

module.exports = Puzzle;
