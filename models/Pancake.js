var mongoose = require('mongoose');

var PancakeSchema = new mongoose.Schema({
  typeOfPancake: String,
  ingredients: String,
  topping: String,
  syrup: Boolean,
  instructions: String,
  time: String
});

module.exports = mongoose.model('Pancake', PancakeSchema);
