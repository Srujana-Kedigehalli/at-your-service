const API_URL = 'http://localhost:5001/api';

export const signup = async (name, email, password) => {
  const response = await fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
  return await response.json();
};

export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return await response.json();
};

export const getUserProfile = async (token) => {
  const response = await fetch(`${API_URL}/user`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return await response.json();
};

// New function to create a booking
export const createBooking = async (userId, serviceId, bookingDate, token) => {
  const bookingData = {
    userId,
    serviceId,
    bookingDate: bookingDate.toISOString(), // Ensure date is in ISO format
  };

  console.log('Booking Data Sent:', bookingData); // Debugging log

  const response = await fetch(`${API_URL}/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Add token in Authorization header
    },
    body: JSON.stringify(bookingData),
  });

  if (!response.ok) {
    const errorDetails = await response.json();
    console.error('Booking API Error Details:', errorDetails); // Debugging log
    throw new Error(errorDetails.message || 'Failed to confirm booking');
  }

  return await response.json(); // Return the booking confirmation data
};
export const processPayment = async (bookingId, amount, token) => {
  const paymentData = {
    bookingId,
    amount,
  };

  console.log('Payment Data Sent:', paymentData); // Debugging log

  const response = await fetch(`${API_URL}/payments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Add token in Authorization header
    },
    body: JSON.stringify(paymentData),
  });

  if (!response.ok) {
    const errorDetails = await response.json();
    console.error('Payment API Error Details:', errorDetails); // Debugging log
    throw new Error(errorDetails.message || 'Failed to process payment');
  }

  return await response.json(); // Return the payment confirmation data
};


