const router = require('express').Router();
const puzzleRoutes = require('./puzzle');

// localhost/api
router.use('/puzzle', puzzleRoutes);

module.exports = router;
