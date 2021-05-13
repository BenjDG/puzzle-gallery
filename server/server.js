const path = require('path');
const express = require('express');
// const multer = require('multer');
const passport = require('./config/passport');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const helmet = require('helmet');
const morgan = require('morgan');
const corsOptions = require('./config/cors.js');
const routes = require('./routes');


// console.log(uuidv1());

const PORT = process.env.PORT || 3001;
const app = express();



mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/puzzlegallery', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
mongoose.set("useCreateIndex", true);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(helmet({ contentSecurityPolicy: false }));
app.use(session({ secret: 'sassy', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));

app.use(morgan('dev'));

// app.post('/api/puzzle/', upload.single('picFile'),(req,res,next)=>{
//   console.log("req.file", req.file);
// })

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



app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(
    `🌎 Server is Ready and Listening on http://localhost:${PORT}`
  ); // eslint-disable-line no-console
});
