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
    thumbnailUUID: '72c73960-a86e-11eb-9abf-0ba93f035d74',
    date: new Date()
  }
]

const seedUser = [
  {
    username: 'user',
    password: '1234'
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

  db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(seedUser))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
