var Category = require('../models/category');
var Item = require('../models/item');
var { body, validation, validationResult } = require('express-validator');
var async = require('async');

exports.category_list = function(req, res, next) {
  Category.find({})
    .sort({name: 1})
    .exec(function(err, results) {
      if (err) { return next(err); }
      res.render('category_list', {title: 'Category List', category_list: results})
    })
}

exports.category_detail = function(req, res, next) {
  async.parallel(
    {
      category(callback) {
        Category.findById(req.params.id).exec(callback);
      },
      items(callback) {
        Item.find({category: req.params.id}).exec(callback);
      }
    },
    (err, results) => {
      if (err) {
        return next(err);
      }
      if (results.category == null) {
        var err = new Error('Category not found');
        err.status = 404;
        return next(err);
      }

      res.render('category_detail', {
        title: 'Category Detail',
        category: results.category,
        items: results.items
      })
    }
  )
}

exports.category_create_get = function(req, res) {
  res.render('category_form', {title: 'Create Category'});
}

exports.category_create_post = [
  body('name', 'Category name required').trim().isLength({min: 1}).escape(),

  (req, res, next) => {
    var errors = validationResult(req);

    var category = new Category ({
      name: req.body.name
    });

    if (!errors.isEmpty()) {
      res.render('category_form', {
        title: 'Create Category', 
        category: category, 
        errors: errors.array()
      });
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

exports.category_delete_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Category delete GET');
}

exports.category_delete_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Category delete POST');
}

exports.category_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Category update GET');
}

exports.category_update_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Category update POST');
}