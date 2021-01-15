const express = require('express');
const authRoutes = require('./routes/user/auth-routes');
const profileRoutes = require('./routes/user/profile-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require ('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
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

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

//connect to mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tenant", ()=>{
    console.log('connected to mongodb');
});

// //set up routes
// app.use('/auth', authRoutes);
// app.use('/profile', profileRoutes);

// create home route
// app.get('/', (req, res) => {
//     res.render('home', {user:req.user});
// });

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
