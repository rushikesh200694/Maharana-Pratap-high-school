const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// GET all approved reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find({ approved: true }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new review
router.post('/', async (req, res) => {
  try {
    const { name, rating, comment } = req.body;
    if (!name || !rating || !comment) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const review = new Review({ name, rating: Number(rating), comment });
    const saved = await review.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
