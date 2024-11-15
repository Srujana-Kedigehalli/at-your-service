import React, { useEffect, useState } from 'react';

function ServiceHistory() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Simulating data fetch for service history
    const fetchServiceHistory = async () => {
      const data = [
        { name: "House Cleaning", provider: "CleanCo", date: "2024-10-01", price: "₹6,000" },
        { name: "Lawn Mowing", provider: "GreenThumb", date: "2024-09-15", price: "₹3,750" },
        { name: "Plumbing Repair", provider: "FixIt Plumbers", date: "2024-08-30", price: "₹9,000" }
      ];
      setServices(data);
    };
    fetchServiceHistory();
  }, []);

  return (
    <div className="service-history">
      <h2>Service History</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <strong>{service.name}</strong> by {service.provider} on {service.date} - {service.price}
            <button>Rebook</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceHistory;