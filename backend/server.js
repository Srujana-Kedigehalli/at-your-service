require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRouter');
const servicesRoutes = require('./routes/serviceRoute');
const bookingsRoutes = require('./routes/bookings');
const paymentRoutes = require('./routes/payments');
const authenticateToken = require('./middleware/auth');
const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/bookings', authenticateToken);
app.use('/api/users/me', authenticateToken);
app.use('/api/users', userRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api', paymentRoutes);


mongoose.connect('mongodb://localhost:27017/at-your-service')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


