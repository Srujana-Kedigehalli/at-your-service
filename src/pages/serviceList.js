import React from 'react';

const services = [
  { name: 'Plumbing', description: 'Fix leaks, install pipes, and handle all your plumbing needs.', price: 5000 },
  { name: 'Pest Control', description: 'Get rid of pests with our safe and effective solutions.', price: 3000 },
  { name: 'Electrical Services', description: 'Repair, install, or troubleshoot electrical systems.', price: 4000 },
  { name: 'Gardening', description: 'Professional gardening and landscaping services.', price: 3500 },
  { name: 'House Cleaning', description: 'Deep cleaning services for homes and offices.', price: 2500 },
  { name: 'Painting', description: 'Interior and exterior painting services.', price: 6000 },
  { name: 'Carpentry', description: 'Custom furniture, repairs, and woodwork services.', price: 4500 },
  { name: 'AC Repair', description: 'Maintain and repair your air conditioning units.', price: 5500 },
  { name: 'Home Security Installation', description: 'Secure your home with advanced security systems.', price: 7000 },
  { name: 'Moving Services', description: 'Efficient and reliable moving assistance.', price: 8000 },
];

const ServicesOverview = () => {
  return (
    <div className="services-overview">
      <h1 className="page-title">Our Services</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h2 className="service-title">{service.name}</h2>
            <p className="service-description">{service.description}</p>
            <p className="service-price">Starting at ₹{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesOverview;
