var Type = require('../models/type');
var { body, validation, validationResult } = require('express-validator');
const { nextTick } = require('async');

exports.type_list = function(req, res, next) {
  Type.find({})
    .sort({name: 1})
    .exec(function(err, results) {
      if (err) { return next(err); }
      res.render('type_list', {title: 'Type List', type_list: results})
    })
}

exports.type_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Type detail: ' + req.params.id);
}

exports.type_create_get = function(req, res) {
  res.render('type_form', {title: 'Create Type'});
}

exports.type_create_post = [
  body('name', 'Category name required').trim().isLength({min: 1}).escape(),

  (req, res, next) => {
    var errors = validationResult(req);

    var category = new Type ({
      name: req.body.name
    });

    if (!errors.isEmpty()) {
      res.render('type_form', {title: 'Create Type', type: category, errors: errors.array()});
      return;
    }
    else {
      category.save((err) => {
        if (err) {
          return next(err);
        }
      })
      res.redirect(category.url);
    }
  }
]

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