const path = require('path');
const express = require('express');
const passport = require('./config/passport');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const helmet = require('helmet');
const morgan = require('morgan');
const corsOptions = require('./config/cors.js');
const routes = require('./routes');
const { v1: uuidv1 } = require('uuid');

// console.log(uuidv1());

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(helmet({ contentSecurityPolicy: false }));
app.use(session({ secret: 'sassy', resave: false, saveUninitialized: true }));
app.use(cors(corsOptions));

app.use(morgan('dev'));
app.use(routes);

// for Reactjs ##################
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// #################################################

if (process.env.NODE_ENV === 'production') {
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/puzzlegallery', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(
    `🌎 Server is Ready and Listening on http://localhost:${PORT}`
  ); // eslint-disable-line no-console
});
