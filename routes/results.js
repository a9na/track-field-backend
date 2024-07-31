const express = require('express');
const router = express.Router();
const Result = require('../models/result');

// Get all results
router.get('/', async (req, res) => {
  try {
    const results = await Result.find().populate('athlete').populate('event');
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new result
router.post('/', async (req, res) => {
  const result = new Result({
    athlete: req.body.athlete,
    event: req.body.event,
    performance: req.body.performance
  });
  try {
    const newResult = await result.save();
    res.status(201).json(newResult);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
