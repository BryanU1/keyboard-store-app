var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TypeSchema = new Schema(
  {
    name: {type: String, required: true, maxLength: 100},
  }
)

TypeSchema
  .virtual('url')
  .get(function() {
    return '/catalog/type/' + this._id;
  });

module.exports = mongoose.model('Type', TypeSchema);