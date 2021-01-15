const router = require('express').Router();
const authRoutes = require('./auth-routes');
const profileRoutes = require('./profile-routes');

// profile routes
router.use('/profile', profileRoutes);

// auth routes
router.use('/auth', authRoutes);

module.exports = router;