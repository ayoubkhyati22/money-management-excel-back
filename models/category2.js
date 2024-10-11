const mongoose = require('mongoose');

const category2Schema = mongoose.Schema({
  name: { type: String }, 
});

module.exports = mongoose.model('Categories2', category2Schema);