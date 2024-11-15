// scripts/populateServices.js

const mongoose = require('mongoose');
const Service = require('../models/serviceModel');

const services = [
  { name: 'Plumbing', price: 5000 },
  { name: 'Pest Control', price: 3000 },
  { name: 'HVAC Services', price: 7000 },
  { name: 'Electrical', price: 2500 },
  { name: 'Carpentry', price: 4000 },
  { name: 'Appliance Repair', price: 3500 },
  { name: 'Home Cleaning', price: 6000 },
  { name: 'Painting', price: 8000 },
  { name: 'Gardening & Landscaping', price: 4500 },
];

mongoose.connect('mongodb://localhost:27017/at-your-service', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const populateServices = async () => {
  try {
    await Service.insertMany(services);
    console.log('Services populated successfully');
  } catch (error) {
    console.error('Failed to populate services:', error);
  } finally {
    mongoose.connection.close();
  }
};

populateServices();
