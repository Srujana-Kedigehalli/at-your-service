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
export const createBooking = async (serviceId, bookingDate, token) => {
  const userId = localStorage.getItem('userId'); // Get the userId from localStorage

  const bookingData = {
    userId,
    serviceId,
    bookingDate,
  };

  const response = await fetch(`${API_URL}/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Add token in Authorization header
    },
    body: JSON.stringify(bookingData),
  });

  if (!response.ok) {
    throw new Error('Failed to confirm booking');
  }

  return await response.json(); // Return the booking confirmation data
};


