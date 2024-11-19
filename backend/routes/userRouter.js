const express = require('express');
const { signup, login,getUser } = require('../controllers/userController');
const router = express.Router();
const authenticateToken = require('../middleware/auth');
const User = require('../models/userModel');

router.get('/me', authenticateToken,getUser, async (req, res) => {
    try {
      const user = await User.findById(req.userId);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
router.post('/signup', signup);
router.post('/login', login);
module.exports = router;

