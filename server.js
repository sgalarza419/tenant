const express = require('express');
const cors = require("cors");
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const routes = require('./routes');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const chalk = require("chalk");

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req,res) => {
  console.log("reached root route /");
  res.send(hello);
})

let user = {};

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
    callbackURL: "/auth/google/callback"
  },
  (accessToken, refreshToken, profile, cb) => {
    console.log(chalk.blue(JSON.stringify(profile)));
    user = {
      ...profile
    };
    return cb(null, profile);
  }));

// initialize passport
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());


app.get("/auth/google", passport.authenticate("google", {
  scope: ["profile", "email"]
}));
app.get("/auth/google/callback",
passport.authenticate("google"),
(req, res) => {
    res.redirect("/profile");
  });

app.get("/user", (req, res) => {
  console.log("getting user data!");
  res.send(user);
});

app.get("/auth/logout", (req, res) => {
  console.log("logging out!");
  user = {};
  res.redirect("/");
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
// Add routes, both API and view
app.use(routes);

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