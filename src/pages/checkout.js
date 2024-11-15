// src/pages/Checkout.js

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createBooking } from './api'; // import the new createBooking function


const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Access service details from location state
  const { selectedServiceId, bookingDate, service } = location.state || {};

  const handleConfirmBooking = async () => {
    try {
      const token = localStorage.getItem('token'); // Get token from localStorage
      /*
      const userId = localStorage.getItem('userId'); // Get userId from localStorage
  
      // Construct the booking data
      const bookingData = {
        userId,          // userId from localStorage
        serviceId: selectedServiceId,  // Use the service ID from state
        bookingDate: bookingDate,      // Booking date from state
      };
  
      const response = await fetch('http://localhost:5001/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,  // Add token in Authorization header
        },
        body: JSON.stringify(bookingData), // Send booking data
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Booking confirmed:', data);
        // Redirect to the payment page
        navigate('/payment');
      } else {
        console.error('Error confirming booking:', data);
        alert('Failed to confirm booking.');
      }
    } catch (error) {
      console.error('Error confirming booking:', error);
      alert('An error occurred. Please try again.');
    }*/
      const response = await createBooking(selectedServiceId, bookingDate, token); // Call createBooking with necessary params
      console.log('Booking confirmed:', response);
      navigate('/payment'); // Redirect to payment page
    } catch (error) {
      console.error('Error confirming booking:', error);
      alert('An error occurred. Please try again.');
    }
  };
  

  if (!service) {
    return <div>No service selected</div>;
  }

  return (
    <div className="checkout-page">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="service-details">
        <h3 className="text-xl font-semibold">{service.name}</h3>
        <p>Price: ₹{service.price}</p>
      </div>
      <button onClick={handleConfirmBooking} className="btn-primary mt-4">Confirm Booking</button>
    </div>
  );
};

export default Checkout;
