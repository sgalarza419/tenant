const router = require('express').Router();
const oauthRoutes = require('./auth-routes');
const profileRoutes = require('./profile-routes');

// profile routes
router.use("/profile", profileRoutes);

// Oauth routes
router.use("/oauth", oauthRoutes);

module.exports = router;