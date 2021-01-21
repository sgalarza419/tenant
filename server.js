const express = require('express');
const cors = require("cors");
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const routes = require('./routes');
const User = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

// Google Strategy
passport.use(
  new GoogleStrategy({
    //option for the google strat
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: "http://localhost:3000/auth/google/callback"
  }, (accessToken, refreshToken, profile, done) => {
    //passport callback function
    // check if user already exists in our db
    User.findOne({
      googleId: profile.id
    }).then((currentUser) => {
      if (currentUser) {
        //already have the user
        console.log('user is: ', currentUser);
        done(null, currentUser);
      } else {
        // if not, create user in our db
        new User({
          username: profile.displayName,
          googleId: profile.id,
          thumbnail: profile._json.picture
        }).save().then((newUser) => {
          console.log('new user created: ' + newUser);
          done(null, newUser);
        });
      }
    })

  })
)

// initialize passport
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

// app.use(function(req,res) {
//   console.log("HERE I AM");
//   console.log("URL: ",req.url);
// })

// Define middleware here
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}));

// Add routes, both API and view
app.use(routes);

//connect to mongodb
mongoose.connect( keys.mongodb.dbURI || "mongodb://localhost/tenant", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log('connected to mongodb')
});



app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});