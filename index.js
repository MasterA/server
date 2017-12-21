const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
      // 30 days in milliseconds
      maxAge: 30 * 24 * 60 * 60 * 1000,
      // key to encrypt the cookie (we random typed a key)
      // this is extra security
      keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

// DYNAMIC PORT BINDING
const PORT = process.env.PORT || 5000;
app.listen(PORT);

/*
Creating app... done, ⬢ limitless-hamlet-26743
https://limitless-hamlet-26743.herokuapp.com/
| https://git.heroku.com/limitless-hamlet-26743.git
*/
