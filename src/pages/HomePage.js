import React from 'react';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <h1>Welcome to At Your Service</h1>
      <p>Your one-stop solution for all household services</p>
      
      <div className="action-buttons">
        <button onClick={() => navigate('/signup')}>
          Book a Service
        </button>
        <button onClick={() => navigate('/services')}>
          View Services
        </button>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Convenience</h2>
            <p>Book services anytime, anywhere with just a few taps.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Quality Assurance</h2>
            <p>We prioritize user satisfaction and work only with top-rated professionals.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Community Focus</h2>
            <p>Supporting local service providers and contributing to neighborhood economic growth.</p>
          </div>
        </div>
    </div>
  );
};

export default HomePage;

