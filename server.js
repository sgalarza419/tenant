const express = require('express');
const cors = require("cors");
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const keys = require('./config/keys');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const routes = require('./routes');
const { User } = require('./models');

let user = {};

const app = express();
const PORT = process.env.PORT || 3001;

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
  callbackURL: "http://localhost:3000/auth/google/callback"
},
(accessToken, refreshToken, profile, done) => {
  console.log("GoogleStrategy profile: ", profile);
  User.findOrCreate({googleId:profile.id}, (err,user)=>{
    console.log("user: ", user);
    return done(err,user);
  });
}
));

// initialize passport
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(function(req,res) {
  console.log("HERE I AM");
  console.log("URL: ",req.url);
})
app.use(routes);

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