

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [services] = useState([
    {
      _id: '1',
      name: 'Plumbing',
      price: 5000,
      providers: [
        { id: 'p1', name: 'John Doe', rating: 4.5 },
        { id: 'p2', name: 'Jane Smith', rating: 4.7 },
        { id: 'p3', name: 'Harvey', rating: 4.6 }
      ]
    },
    {
      _id: '2',
      name: 'Pest Control',
      price: 3000,
      providers: [
        { id: 'p4', name: 'Mike Johnson', rating: 4.3 },
        { id: 'p5', name: 'Sara Lee', rating: 4.8 }
      ]
    },
    {
      _id: '3',
      name: 'Electrical services',
      price: 3000,
      providers: [
        { id: 'p6', name: 'Bob', rating: 4.3 },
        { id: 'p7', name: 'Neal Caffery', rating: 4.8 }
      ]
    },
    {
      _id: '4',
      name: 'Gardening',
      price: 3000,
      providers: [
        { id: 'p8', name: 'Nick Halden', rating: 4.3 },
        { id: 'p9', name: 'Peter Burke', rating: 4.8 }
      ]
    }
  ]);
  
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error("No token found. Redirecting to login.");
      navigate('/login'); 
      return;
    }
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/users/me', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        const userData = await response.json();
        if (response.ok) {
          setUser(userData);
        } else {
          console.error("Failed to fetch user data:", await response.text());
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    
    const fetchBookings = async () => {
      const userId = localStorage.getItem('userId');
      console.log('Fetching bookings for userId:', userId);
      try {
        const token = localStorage.getItem('token');
    
    if (!token || !userId) throw new Error('Missing token or userId');

    const response = await fetch(`http://localhost:5001/api/bookings/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    //if (!response.ok) throw new Error('Failed to fetch user bookings');
    const data = await response.json();
    console.log('User bookings:', data);
    return data;
  } catch (error) {
    console.error('Error fetching user bookings:', error);
    throw error;
      }
    };


    fetchUserData();

  }, [navigate]);

  const handleBookService = (serviceId, provider,serviceName, servicePrice) => {
    if (!serviceId || !provider) {
      console.error('Invalid service or provider:', serviceId, provider);
      return;
    }

    const bookingDate = new Date(); // Current date and time
    navigate('/checkout', {
      state: { serviceId, provider,serviceName, price:servicePrice, bookingDate },
    });
  };

  return (
    <div className="dashboard-page">
      {/* Welcome message */}
      <h2 className="text-2xl font-bold mb-4">
        Hello, {user ? user.name : 'User'}! What do you need help with today?
      </h2>

      {/* Service list */}
      <div className="services-list mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {services.map((service) => (
    <div key={service._id} className="service-item p-4 border rounded-lg shadow-md bg-white">
      <h3 className="text-xl font-semibold">{service.name}</h3>
      <p className="text-gray-600">Price: ₹{service.price}</p>

      {/* Providers list for each service */}
      <div className="providers mt-4">
        <h4 className="font-semibold">Available Providers</h4>
        {service.providers.map((provider) => (
          <div key={provider.id} className="provider-item flex justify-between items-center p-2 border-b">
            <div>
              <p className="font-semibold">{provider.name}</p>
              <p className="text-sm">Rating: {provider.rating} ★</p>
            </div>
            <button
              onClick={() => handleBookService(service._id, provider,service.name,service.price)}
              className="btn-primary"
            >
              Book
            </button>
          </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;


      
