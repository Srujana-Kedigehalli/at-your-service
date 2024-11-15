// src/pages/Services.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/services');
        if (!response.ok) throw new Error('Failed to fetch services');
        const servicesData = await response.json();
        setServices(servicesData);
      } catch (error) {
        console.error('Error fetching services:', error);
        setError('Failed to load services');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleBookService = (service) => {
    const bookingDate = new Date(); 
    navigate('/checkout', { state: { selectedServiceId: service._id, bookingDate, service } });
  };
  

  if (loading) {
    return <div>Loading services...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="services-page">
      <h2 className="text-2xl font-bold mb-4">Available Services</h2>
      <div className="services-list">
        {services.map((service) => (
          <div key={service._id} className="service-item flex justify-between items-center p-4 border-b">
            <div>
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <p className="text-gray-600">Price: ₹{service.price}</p>
            </div>
            <button
              onClick={() => handleBookService(service._id)}
              className="btn-primary"
            >
              Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
