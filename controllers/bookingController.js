const Booking = require('../models/bookingModel');

exports.confirmBooking = async (req, res) => {
    const { userId, serviceId, bookingDate } = req.body;
    if (!userId || !serviceId || !bookingDate) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
  
    try {
      const newBooking = new Booking({ userId,
        serviceId,
        bookingDate, });
      await newBooking.save();
      
      res.status(201).json({ message: 'Booking confirmed', booking: newBooking });
    } catch (error) {
      console.error('Error confirming booking:', error);
      res.status(500).json({ message: 'Error confirming booking' });
    }
  };
  