const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/amazon2");

const SchemaName = mongoose.Schema({
  username: String,
  email: String,
  age: Number,
});

module.exports = mongoose.model('User', SchemaName);
