const express = require('express');
const router = express.Router();


const model = require('../models/model');

router.get('/users', (req, res) => {
  res.json(model.getAllUsers());
});

module.exports = router;