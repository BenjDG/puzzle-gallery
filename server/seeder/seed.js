const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/puzzlegallery', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const seed = [
  {
    thumbnail: 'c:/',
    date: new Date()
  }
]


db.Puzzle.deleteMany({})
  .then(() => db.Puzzle.collection.insertMany(seed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
