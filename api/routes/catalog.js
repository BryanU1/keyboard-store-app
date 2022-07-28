var express = require('express');
var router = express.Router();

var item_controller = require('../controllers/itemController');

router.get('/', item_controller.index);

router.get('/item/create', 
item_controller.item_create_get);

router.post('/item/create', 
item_controller.item_create_post);

router.get('/item/:id/delete', 
item_controller.item_delete_get);

router.post('/item/:id/delete', 
item_controller.item_delete_post);

router.get('/item/:id/update', 
item_controller.item_update_get);

router.post('/item/:id/update', 
item_controller.item_update_post);

router.get('/book/:id', 
item_controller.item_detail);

router.get('/book', 
item_controller.item_list);

module.exports = router;