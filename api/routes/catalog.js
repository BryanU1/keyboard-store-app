var express = require('express');
var router = express.Router();

var item_controller = require('../controllers/itemController');
var type_controller = require('../controllers/typeController');

router.get('/', item_controller.index);

// ITEM ROUTES

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

router.get('/item/:id', 
item_controller.item_detail);

router.get('/item', 
item_controller.item_list);

// TYPE ROUTES

router.get('/type/create',
type_controller.type_create_get);

router.post('/type/create',
type_controller.type_create_post);

router.get('/type/:id/delete',
type_controller.type_delete_get);

router.post('/type/:id/delete',
type_controller.type_delete_post);

router.get('/type/:id/update',
type_controller.type_update_get);

router.post('/type/:id/update',
type_controller.type_update_post);

router.get('/type/:id',
type_controller.type_detail);

router.get('/type',
type_controller.type_list);

module.exports = router;