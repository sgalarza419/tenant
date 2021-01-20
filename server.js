const express = require('express');
const cors = require("cors");
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').OAuth2Strategy;
const keys = require('./config/keys');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const routes = require('./routes');

let user = {};

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  console.log("reached root route /");
  res.send(hello);
})

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

// Google Strategy
passport.use(new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback: true
  },
  (request, accessToken, refreshToken, profile, done) => {
    User.findOrCreate({
      googleId: profile.id
    }, (err, user) => {
      return done(err, user);
    });
  }
));

// initialize passport
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

app.get("/user", (req, res) => {
  console.log("getting user data!");
  res.send(user);
});

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

//connect to mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tenant", {
  useNewUrlParser: true
}, () => {
  console.log('connected to mongodb')
});

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});