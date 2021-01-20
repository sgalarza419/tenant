const passport = require('passport');
const router = require('express').Router();

// auth with google
// endpoints: /auth/google
router.use('/google',
    passport.authenticate('google', {
        scope: ['profile',
                'email'
        ]
    }));

// callback route for google to redirect to
// endpoints: /auth/google/callback
router.use('/google/callback', 
    //     passport.authenticate('google', {
    //     successRedirect: '/home',
    //     failureRedirect: '/login'
    // }),
    (req, res) => {
        console.log("/google/callback")
        // res.send(req.user);
        res.redirect('/home')
    });

module.exports = router;