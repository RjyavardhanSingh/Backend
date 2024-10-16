const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

router.post('/', async (req, res) => {
  const { name, email, contact, suggestion,} = req.body;

  if (!name || !email || !contact || !suggestion) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  try {
    const newFeedback = new Feedback({ name, email, contact, suggestion });
    await newFeedback.save();
    console.log(newFeedback);
    
    res.status(201).json({ message: 'Feedback submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

module.exports = router;
