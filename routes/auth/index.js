const passport = require('passport');
const router = require('express').Router();

// auth with google
// endpoints: /auth/google
router.get('/google',
    passport.authenticate('google', {
        scope: ['profile']
    }));

// callback route for google to redirect to
// endpoints: /auth/google/callback
router.get('/google/callback', 
        passport.authenticate('google', {
        successRedirect: '/home',
        failureRedirect: '/login'
    }),
    function (req, res) {
        console.log("/google/callback")
        // res.send(req.user);
        res.redirect('/')
    });

module.exports = router;