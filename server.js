// Requires
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

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
