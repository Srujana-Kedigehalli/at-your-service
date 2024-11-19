import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { serviceId, provider, selectedDate, address, notes, price } = location.state || {};

  if (!serviceId || !provider) {
    return <div>Booking details are missing!</div>;
  }

  return (
    <div className="confirmation-page">
      <h2>Booking Confirmation</h2>
      <p className="confirmation-message">Your booking has been successfully confirmed!</p>

      <div className="booking-details">
        <p><strong>Service ID:</strong> {serviceId}</p>
        <p><strong>Provider:</strong> {provider.name}</p>
        <p><strong>Rating:</strong> {provider.rating} ★</p>
        <p><strong>Price:</strong> {price}</p>
        <p><strong>Booking Date:</strong> {new Date(selectedDate).toLocaleDateString()}</p>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Notes:</strong> {notes || 'N/A'}</p>
      </div>

      <button className="back-button" onClick={() => navigate('/dashboard')}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default ConfirmationPage;
