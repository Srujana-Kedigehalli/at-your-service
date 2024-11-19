import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { serviceId, provider, bookingDate,price } = location.state || {};

  const [selectedDate, setSelectedDate] = useState(bookingDate || new Date());
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value));
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleProceedToCheckout = () => {
    if (!address) {
      alert('Please provide an address.');
      return;
    }

    navigate('/payment', {
      state: {
        serviceId, 
        provider,
        selectedDate,
        address,
        notes,
        price, 
      },
    });
  };

  if (!serviceId || !provider) {
    return <div>Invalid service or provider</div>;
  }

  return (
<div className="checkout-page">
  <h2 className="text-2xl font-bold">Booking Summary</h2>

  <div className="service-summary">
    <p><strong>Service:</strong> {serviceId.name} </p>
    <p><strong>Provider:</strong> {provider.name}</p>
    <p><strong>Rating:</strong> {provider.rating} ★</p>
    <p><strong>Price:</strong> ₹{price || 'N/A'}</p>
    <p><strong>Booking Date:</strong> {selectedDate.toLocaleDateString()}</p>
  </div>

  <div className="date-picker">
    <label>Select a Date</label>
    <input
      type="date"
      value={selectedDate.toISOString().split('T')[0]}
      onChange={handleDateChange}
      className="input-field"
    />
  </div>

  <div className="address-input">
    <label>Address</label>
    <input
      type="text"
      value={address}
      onChange={handleAddressChange}
      placeholder="Enter your address"
      className="input-field"
    />
  </div>

  <div className="notes-input">
    <label>Notes</label>
    <textarea
      value={notes}
      onChange={handleNotesChange}
      placeholder="Any special instructions?"
      className="input-field"
    />
  </div>

  <div className="proceed-button">
    <button onClick={handleProceedToCheckout} className="btn-primary">
      Proceed to Checkout
    </button>
  </div>
</div>

  );
};

export default Checkout;

