const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', 
passport.authenticate('google'),
(req, res) => {
    res.render('login', {user:req.user});
});

// auth logout
router.get('/auth/logout', (req, res) => {
    console.log("logging out!");
    req.logout();
    res.redirect('/');
})

// auth with google
router.get('/auth/google', passport.authenticate('google', {
    scope: ['email','profile']
}));

// callback route for google to redirect to
router.get('/google/redirect',
passport.authenticate('google'), 
(req,res)=>{
    // res.send(req.user);
    res.redirect('/')
});


module.exports = router;