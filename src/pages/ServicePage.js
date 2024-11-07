import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    name: "Plumbing",
    description: "Repairs, installations, leak fixing, and emergency services",
    icon: "🚰"
  },
  {
    name: "Pest Control",
    description: "Termite treatment, rodent control, and insect extermination",
    icon: "🐛"
  },
  {
    name: "HVAC Services",
    description: "Air conditioning/heating installation, repair, and maintenance",
    icon: "❄️"
  },
  {
    name: "Electrical",
    description: "Wiring, lighting, appliance setup, and electrical repairs",
    icon: "⚡"
  },
  {
    name: "Carpentry",
    description: "Furniture assembly, repairs, custom woodwork, and cabinetry",
    icon: "🪚"
  },
  {
    name: "Home Cleaning",
    description: "Regular cleaning, deep cleaning, and post-renovation cleanup",
    icon: "🧹"
  },
  {
    name: "Painting",
    description: "Interior/exterior painting, wall treatments, and decorative finishes",
    icon: "🎨"
  },
  {
    name: "Appliance Repair",
    description: "Fixing fridges, washing machines, ovens, and other home appliances",
    icon: "🔧"
  },
  {
    name: "Gardening & Landscaping",
    description: "Lawn maintenance, plant care, and garden design",
    icon: "🌿"
  }
];

function ServicePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = SERVICES.filter(service => 
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>

      <div className="mb-6">
        <input 
          type="text"
          placeholder="Search services..."
          className="w-full p-3 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredServices.map((service, index) => (
          <div 
            key={index} 
            className="bg-white border rounded-lg p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <Link 
              to={`/book-service?service=${service.name}`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicePage;