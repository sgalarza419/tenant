const router = require('express').Router();
const authRoutes = require('./auth-routes');
const profileRoutes = require('./profile-routes');

// profile routes 
// endpoints: /user/profile
router.use('/profile', profileRoutes, ()=>{
    console.log("this is the /profile route")
});

// auth routes
router.use('/auth', authRoutes, ()=>{
    console.log("this is the /auth route")
});

module.exports = router;