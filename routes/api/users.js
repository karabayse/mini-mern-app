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

// POST api/users
router.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    picture: req.body.picture,
    description: req.body.description
  });
  newUser.save().then(user => res.json(user));
});

// DELETE api/users/:id
router.delete('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});

module.exports = router;
