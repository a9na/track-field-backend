const express = require('express');
const router = express.Router();
const Athlete = require('../models/athlete');

// Get all athletes
router.get('/', async (req, res) => {
  try {
    const athletes = await Athlete.find();
    res.json(athletes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new athlete
router.post('/', async (req, res) => {
  const athlete = new Athlete({
    name: req.body.name,
    age: req.body.age
  });
  try {
    const newAthlete = await athlete.save();
    res.status(201).json(newAthlete);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
