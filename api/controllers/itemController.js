var Item = require('../models/item');
var async = require('async');
var { body, validationResult } = require('express-validator');

exports.index = function(req, res) {
  Item.countDocuments({}, function(err, results) {
    res.render('index', {title: 'KeyB Home', error: err, data: results});
  });
}

// Display list of all items
exports.item_list = function(req, res, next) {
  Item.find({}, 'name price')
    .sort({name: 1})
    .exec(function (err, list_items) {
      if (err) {return next(err); }
      // Successful, so render
      res.render('item_list', {title: 'Item List', item_list: list_items});
    })
  }


exports.item_detail = function(req, res, next) {
  Item.findById(req.params.id)
    .exec((err, results) => {
      if (err) {return next(err);}
      if (results==null) {
        var err = new Error('Item not found');
        err.status = 404;
        return next(err);
      }
      res.render('item_detail', {
        item: results
      });
    });
}

// Display Item create form on GET
exports.item_create_get = function(req, res, next) {
  res.render('item_form', {title:'Create Item'});
}

// Handle Item create on POST
exports.item_create_post = [
  body('name', 'Item name required').trim().isLength({min:1}).escape(),
  body('imgUrl').trim(),
  body('price').isFloat().escape().withMessage('Price must be a number'),
  body('type').trim().isAlpha().escape().withMessage('Type must contain letters'),

  (req, res, next) => {
    const errors = validationResult(req);

    const item = new Item({
      name: req.body.name,
      imgUrl: req.body.imgUrl,
      price: req.body.price,
      type: req.body.type
    });

    if(!errors.isEmpty()) {
      res.render('item_form', {
        title: 'Create Item',
        item,
        errors: errors.array(),
      });
      return;
    } else {
      item.save((err) => {
        if (err) {
          return next(err);
        }
      })
      res.redirect(item.url);
    }
  }
]

exports.item_delete_get = function(req, res, next) {
  Item.findById(req.params.id).exec(function(err, results) {
    if (err) { return next(err); }
    if (results==null) {
      res.redirect('/catalog/items');
    }
    res.render('item_delete', {title: 'Delete Item', item: results})
  })
}

exports.item_delete_post = function(req, res, next) {
  Item.findByIdAndRemove(req.params.id, function(err) {
    if (err) { return next(err); }
    res.redirect('/catalog/items')
  })
}

exports.item_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Item update GET');
}

exports.item_update_post = function(req, res) {
  res.send('NOT IMPLEMETNTED: Item update POST');
}