const mongoose = require('mongoose');

const category3Schema = mongoose.Schema({
  name: { type: String }, 
});

module.exports = mongoose.model('Categories3', category3Schema);