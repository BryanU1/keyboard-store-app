var express = require('express');
var router = express.Router();

var category_controller = require('../controllers/categoryController');

router.get('/', function(req, res) {
  res.send('API is working properly.');
});

module.exports = router;