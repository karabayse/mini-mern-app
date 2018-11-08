// Requires
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const users = require('./routes/api/users');

const app = express();

// Uses - Bodyparser Middleware
app.use(bodyParser.json());

// Connect to DB
mongoose
  .connect('localhost:27017/miniMERNDB')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// User Routes
app.use('/api/users', users);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

// Spin up server
app.listen(port, function() {
  console.log('server up on:', port);
});
