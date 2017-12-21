const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// to uniquely identify our user inside the cookie we use
// user.id which is the id of the mongoDB object a.k.a. model instance id.
// mongoDB model instance --> return id
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// so since cookie has user.id we can pass it such id to this function.
// id --> return mongoDB model instance
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
});


// GoogleStrategy same as google arg input of
// function passport.authenticate
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
     (accessToken, refreshTocken, profile, done) => {
       User.findOne({ googleId: profile.id })
       .then((existingUser) => {
          if(existingUser) {
            // we already have a record with the given profile ID
            done(null, existingUser);
          } else {
            // we don't have a user record with this ID, make a new record
            new User({ googleId: profile.id })
              .save()
              .then(user => done(null, save));
          }
        })
    }
  )
);
