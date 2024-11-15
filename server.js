require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRouter');
const servicesRoutes = require('./routes/serviceRoute');
const bookingsRoutes = require('./routes/bookings');

const app = express();
const cors = require('cors');
app.use(cors());
mongoose.connect('mongodb://localhost:27017/at-your-service')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/bookings', bookingsRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


