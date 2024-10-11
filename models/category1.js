const mongoose = require('mongoose');

const category1Schema = mongoose.Schema({
  name: { type: String }, 
});

module.exports = mongoose.model('Categories1', category1Schema);