// Requires
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Schema = mongoose.Schema;
const miniMERNSchema = new mongoose.Schema({
  name: String,
  picture: String,
  description: String
});
const miniMERNModel = mongoose.model('miniMERNModel', miniMERNSchema);

const app = express();

// Uses - Bodyparser Middleware
app.use(bodyParser.json());

// Connect to DB
mongoose
  .connect('localhost:27017/miniMERNDB')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const port = process.env.PORT || 4000;

// Spin up server
app.listen(port, function() {
  console.log('server up on:', port);
});
