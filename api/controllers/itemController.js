var Item = require('../models/item');
var async = require('async');

exports.index = function(req, res) {
  Item.countDocuments({}, function(err, results) {
    res.render('index', {title: 'KeyB Home', error: err, data: results});
  });
}

exports.item_list = function(req, res) {
  res.send('NOT IMPLEMENTED: Item List');
}

exports.item_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Item detail:' + req.params.id)
}

exports.item_create_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Item create GET');
}

exports.item_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Item create POST');
}

exports.item_delete_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Item delete GET');
}

exports.item_delete_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Item delete POST');
}

exports.item_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Item update GET');
}

exports.item_update_post = function(req, res) {
  res.send('NOT IMPLEMETNTED: Item update POST');
}