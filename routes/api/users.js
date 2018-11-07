const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User');

// Create Routes
// GET api/users
router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users));
});

module.exports = router;
