import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
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
        { id: 'p3', name: 'Mike Johnson', rating: 4.3 },
        { id: 'p4', name: 'Sara Lee', rating: 4.8 }
      ]
    }

  ]);
  
  const navigate = useNavigate();

  const handleBookService = (serviceId, provider) => {
    if (!serviceId || !provider) {
      console.error('Invalid service or provider:', serviceId, provider);
      return;
    }
    
    const bookingDate = new Date(); // Current date and time
    navigate('/checkout', {
      state: { serviceId, provider, bookingDate },
    });
  };

  return (
    <div className="services-page">
      <h2 className="text-2xl font-bold mb-4">Available Services</h2>
      <div className="services-list">
        {services.map((service) => (
          <div key={service._id} className="service-item p-4 border-b mb-6">
            <h3 className="text-xl font-semibold">{service.name}</h3>
            <p className="text-gray-600">Price: ₹{service.price}</p>

            <div className="providers mt-4">
              <h4 className="font-semibold">Providers</h4>
              {service.providers.map((provider) => (
                <div key={provider.id} className="provider-item flex justify-between items-center p-2 border-b">
                  <div>
                    <p className="font-semibold">{provider.name}</p>
                    <p className="text-sm">Rating: {provider.rating} ★</p>
                  </div>
                  <button
                    onClick={() => handleBookService(service._id, provider)}
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

export default Services;

