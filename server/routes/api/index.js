const router = require('express').Router();
const authRoutes = require('./auth');
const puzzle = require('./puzzle');

const isAuth = require('../../../config/middleware/isAuthenticated');

router.use('/auth', authRoutes);

router.use(isAuth);

router.use('/puzzle', puzzle);

module.exports = router;
