const router = require('express').Router();
const profileRoutes = require('./profile-routes');

// profile routes 
// endpoints: /user/profile
router.use('/profile', profileRoutes, ()=>{
    console.log("this is the /profile route")
});


module.exports = router;