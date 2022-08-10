var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ItemSchema = new Schema(
  {
    name: {type: String, required: true, maxLength: 100},
    imgUrl: {type: String, required: true, maxLength: 500},
    price: {type: Number, required: true},
    category: {type: String}
  }
);

ItemSchema
  .virtual('url')
  .get(function () {
    return '/catalog/item/' + this._id;
  });

module.exports = mongoose.model('Item', ItemSchema);