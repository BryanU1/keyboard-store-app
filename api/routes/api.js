var express = require('express');
var router = express.Router();

var item_controllers = require('../controllers/itemController');
var category_controllers = require('../controllers/categoryController');

router.get('/', function(req, res) {
  res.send('API is working properly.');
});

router.get('/items', item_controllers.api_items_get);

router.get('/categories', category_controllers.api_category_get);

module.exports = router;