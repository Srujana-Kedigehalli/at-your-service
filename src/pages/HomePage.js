/*
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">
          Your one step solution....
        </h1>
        <p className="text-xl mb-10">
          At Your Service connects you with trusted professionals for all your household needs.
        </p>
        
        <div className="flex justify-center space-x-6 mb-16">
          
          <Link 
            to="/signup" 
            className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition"
          >
            Log In
          </Link>
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
    </div>
  );
}

export default HomePage;
*/
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
          Get Started
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