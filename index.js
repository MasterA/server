const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./models/Skills');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

// all middleware are covert by using app.use in express.
// Middleware operate on the incoming request before they are
// send off to our request handlers.

//When someone sends in a post request it should take
//The request body parse it and then make it available
//To everything inside of our application,
//So we can make the token available via req.body property.
//npm install --save body-parser
// Any request that is either a post or get etc that has a body
// will be accesable via req.body property in the request handlers.
app.use(bodyParser.json());

app.use(
  cookieSession({
      // 30 days in milliseconds
      maxAge: 30 * 24 * 60 * 60 * 1000,
      // key to encrypt the cookie (we random typed a key)
      // this is extra security
      keys: [keys.cookieKey]
  })
);

// INITIALIZE PASSPORT WITH OUR APP
app.use(passport.initialize());
app.use(passport.session());

// ROUTING LOGIC
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);
require('./routes/skillsRoutes')(app);

// ONLY RUN IN PRODUCTION (HEROKU)
// routing in production (Section 9, lesson 109)
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


// DYNAMIC PORT BINDING
const PORT = process.env.PORT || 5000;
app.listen(PORT);

/*
Creating app... done, ⬢ limitless-hamlet-26743
https://limitless-hamlet-26743.herokuapp.com/
| https://git.heroku.com/limitless-hamlet-26743.git
*/
