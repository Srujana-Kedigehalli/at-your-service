// routes/bookings.js

const express = require('express');
const router = express.Router();
const Booking = require('../models/bookingModel');
const { confirmBooking } = require('../controllers/bookingController');
const authenticateUser = require('../middleware/auth');

router.post('/', authenticateUser, confirmBooking);

// POST booking
router.post('/bookings', async (req, res) => {
  const { userId, serviceId } = req.body;

  if (!userId || !serviceId) {
    return res.status(400).json({ message: 'User ID and Service ID are required' });
  }

  try {
    const newBooking = new Booking({
      user: userId,
      service: serviceId,
      date: new Date(),
    });
    await newBooking.save();
    res.status(201).json({ message: 'Booking successful', booking: newBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create booking' });
  }
});
// GET bookings for a specific user
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
      const userBookings = await Booking.find({ user: userId }).populate('service');
      res.status(200).json(userBookings);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to fetch bookings' });
    }
  });
  
// GET a specific booking by ID
router.get('/booking/:bookingId', async (req, res) => {
    const { bookingId } = req.params;
    try {
      const booking = await Booking.findById(bookingId).populate('service');
      if (!booking) {
        return res.status(404).json({ message: 'Booking not found' });
      }
      res.status(200).json(booking);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to fetch booking' });
    }
  });
  
module.exports = router;
