// routes/services.js

const express = require('express');
const router = express.Router();
const Service = require('../models/serviceModel');

// GET all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch services' });
  }
});

module.exports = router;
