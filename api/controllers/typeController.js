var Type = require('../models/type');
var { body, validation } = require('express-validator');

exports.type_list = function(req, res) {
  res.send('NOT IMPLEMENTED: Types list');
}

exports.type_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Type detail: ' + req.params.id);
}

exports.type_create_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Type create GET');
}

exports.type_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Type create POST');
}

exports.type_delete_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Type delete GET');
}

exports.type_delete_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Type delete POST');
}

exports.type_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Type update GET');
}

exports.type_update_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Type update POST');
}