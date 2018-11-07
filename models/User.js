const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const miniMERNSchema = new mongoose.Schema({
  name: String,
  picture: String,
  description: String
});

// Model
const miniMERNModel = mongoose.model('miniMERNModel', miniMERNSchema);

module.exports = User = mongoose.model('user', miniMERNSchema);
