
// create schema file
const mongoose = require('mongoose');

const productData = new mongoose.Schema({
  name:  { type: String, required:true},
  description: { type: String, required: true},
  price: { type: Number },
  image: { type: String, required: true},
  rating: { type: Number, required: true},
  weedData: { type: String, required: true},
  size: { type: String, required: true},
 
});

module.exports = mongoose.model('Item', productData);

