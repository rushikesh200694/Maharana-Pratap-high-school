const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST contact form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }
    const contact = new Contact({ name, email, phone, subject, message });
    const saved = await contact.save();
    res.status(201).json({ message: 'Message sent successfully!', data: saved });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all contact submissions
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
