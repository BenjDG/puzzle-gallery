const router = require('express').Router();
const puzzleController = require('../../../controllers/puzzleController');

// Matches with '/api/puzzle'

router.route('/')
  .get(puzzleController.findAll)
  .post(puzzleController.save);

// Matches with '/api/books/:id'
router.route('/delete/:id')
  .delete(puzzleController.remove);

module.exports = router;
