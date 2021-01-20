const router = require('express').Router();

const authCheck = (req,res,next) => {
    console.log("authCheck: ", req.user);
    if(!req.user){
        //if user is not logged in
        res.redirect('/login');
    } else {
        // if logged in
        next();
    }
}

// endpoint: /user/profile
// method: GET
router.get('/', authCheck, (req,res) => {
    console.log("profile routes: GET /");
    res.redirect('/home');
});

module.exports = router;