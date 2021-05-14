const path = require('path');
const fs = require('fs');
const router = require('express').Router();
const puzzleController = require('../../../controllers/puzzleController');
const multer = require('multer');
const { v1: uuidv1 } = require('uuid');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(req.user.id);
    //console.log(`path`, path.join(__dirname, '../../../../tmp', req.user.id))
    const dir = path.join(__dirname, '../../../../tmp', req.user.id)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, path.join(__dirname, '../../../../tmp', req.user.id))
  },
  filename: function (req, file, cb) {
    cb(null, uuidv1())
  }
})

const upload = multer({ storage: storage });

// Matches with '/api/puzzle'

router.route('/')
  .get(puzzleController.findAll)

// Matches with '/api/books/:id'
router.route('/delete/:id')
  .delete(puzzleController.remove);

router.use(upload.single('picFile'));

router.route('/')
  .post(puzzleController.save);

module.exports = router;
