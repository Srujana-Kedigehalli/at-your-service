import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [services, setServices] = useState([]); // Define services state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user] = useState(null);
  const navigate = useNavigate();

  const userId = localStorage.getItem('userId');

  // Fetch user bookings
  useEffect(() => {
    const fetchUserBookings = async () => {
      if (!userId) return;
      try {
        const response = await fetch(`http://localhost:5001/api/bookings/${userId}`);
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setError('Failed to fetch bookings');
      }
    };

    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/services');
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
        setError('Failed to fetch services');
      } finally {
        setLoading(false);
      }
    };

    fetchUserBookings();
    fetchServices();
  }, [userId]);

  const handleRebook = async (bookingId) => {
    try {
      const response = await fetch(`http://localhost:5001/api/bookings/booking/${bookingId}`);
      const booking = await response.json();
      if (booking) {
        navigate(`/checkout?bookingId=${booking._id}`);
      }
    } catch (error) {
      console.error('Error fetching booking:', error);
    }
  };

  const handleBookService = (serviceId) => {
    navigate(`/services?serviceId=${serviceId}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading dashboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h2 className="text-2xl font-bold mb-4">Hello, {user ? user.name : 'User'}! What do you need help with today?</h2>
      
      <p>Your last service: {user?.lastService}</p>
      <p>Upcoming booking: {user?.upcomingService}</p>

      <div className="buttons mt-4">
        <button onClick={() => handleBookService()} className="btn-primary">Book a Service</button>
        <button className="btn-secondary">My Favorites</button>
        <button className="btn-secondary">Ongoing Services</button>
      </div>

      <div className="service-history mt-6">
        <h3 className="text-xl font-semibold">Service History</h3>
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <div key={booking._id} className="service-item flex justify-between items-center mt-2">
              <div>
                <strong>{booking.service.name}</strong>
                <div className="text-sm text-gray-600">
                  {new Date(booking.date).toLocaleDateString()} - ₹{booking.service.price}
                </div>
              </div>
              <button onClick={() => handleRebook(booking._id)}>Rebook</button>
            </div>
          ))
        ) : (
          <p>No past services found</p>
        )}
      </div>

      <div className="available-services mt-6">
        <h3 className="text-xl font-semibold">Available Services</h3>
        {services.length > 0 ? (
          services.map((service) => (
            <div key={service._id} className="service-item flex justify-between items-center mt-2">
              <div>
                <strong>{service.name}</strong>
                <div className="text-sm text-gray-600">₹{service.price}</div>
              </div>
              <button onClick={() => handleBookService(service._id)} className="btn-primary">
                Book
              </button>
            </div>
          ))
        ) : (
          <p>No services available</p>
        )}
      </div>

      <div className="recommendations mt-6">
        <h3 className="text-xl font-semibold">Recommendations</h3>
        <p>It's time for a home deep clean!</p>
        <button className="btn-primary mt-2">Schedule Deep Clean</button>
      </div>

      <div className="status-tracker mt-6">
        <h3 className="text-xl font-semibold">Live Status Tracker</h3>
        <p>Current Service: Lawn Mowing</p>
        <p>On site</p>
        <div className="progress-bar mt-2">
          <div style={{ width: '75%' }} className="progress bg-blue-600 text-white text-center">75% Complete</div>
        </div>
        <p className="text-sm mt-1">30 mins remaining</p>
      </div>
    </div>
  );
};

export default Dashboard;
