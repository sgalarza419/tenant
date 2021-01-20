const router = require('express').Router();
const passport = require('passport');

// auth with google
router.get('/auth/google/',
passport.authenticate('google', {
    scope: ['profile',
            'email']
}));

// callback route for google to redirect to
router.get('/auth/google/callback',
passport.authenticate('google'), 
{successRedirect: '/',
failureRedirect: '/login'},
(req,res)=>{
    // res.send(req.user);
    res.redirect('/')
});


module.exports = router;