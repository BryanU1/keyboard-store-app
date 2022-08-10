var Item = require('../models/item');
var Category = require('../models/Category');
var async = require('async');
var { body, validationResult } = require('express-validator');

exports.index = function(req, res) {
  async.parallel({
    item_count(callback) {
      Item.countDocuments({}, callback);
    },
    category_count(callback) {
      Category.countDocuments({}, callback);
    }
  }, function(err, results) {
    res.render('index', {title: 'KeyB Home Page', error: err, data: results})
  })
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
exports.item_create_get = function(req, res) {
  res.render('item_form', {title:'Create Item'});
}

// Handle Item create on POST
exports.item_create_post = [
  body('name', 'Item name required').trim().isLength({min:1}).escape(),
  body('imgUrl').trim(),
  body('price').isFloat().escape().withMessage('Price must be a number'),
  body('category').trim(),

  (req, res, next) => {
    const errors = validationResult(req);

    const item = new Item({
      name: req.body.name,
      imgUrl: req.body.imgUrl,
      price: req.body.price,
      category: req.body.category
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
      res.redirect('/catalog/item');
    }
    res.render('item_delete', {title: 'Item', item: results})
  })
}

exports.item_delete_post = function(req, res, next) {
  Item.findByIdAndRemove(req.params.id, function(err) {
    if (err) { return next(err); }
    res.redirect('/catalog/item')
  })
}

exports.item_update_get = function(req, res, next) {
  Item.findById(req.params.id).exec(function(err, results) {
    if(err) { return next(err); }
    if(results===null) {
      var err = new Error('Item not found');
      err.status = 404;
      return next(err);
    }
    res.render('item_form', {title: 'Update Item', item: results});
  })
}

exports.item_update_post = [
  body('name', 'Item name required').trim().isLength({min:1}).escape(),
  body('imgUrl').trim(),
  body('price').isFloat().escape().withMessage('Price must be a number'),
  body('category').trim().isAlpha().escape().withMessage('Category must contain letters'),

  (req, res, next) => {
    var errors = validationResult(req);

    var item = new Item({
      name: req.body.name,
      imgUrl: req.body.imgUrl,
      price: req.body.price,
      category: req.body.category,
      _id: req.params.id
    });

    if (!errors.isEmpty()) {
      res.render('item_form', {title: 'Update Item', item, errors: errors.array() });
      return;
    } 
    else {
      Item.findByIdAndUpdate(req.params.id, item, {}, function(err, results) {
        if (err) { return next(err); }

        res.redirect(results.url)
      });
    }
  }
]