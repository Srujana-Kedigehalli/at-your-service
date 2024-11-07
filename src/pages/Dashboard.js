import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Simulating data fetch for user info
    const fetchUserData = async () => {
      const data = {
        name: "Ananya",
        lastService: "House Cleaning",
        upcomingService: "Lawn Mowing on 15th Oct"
      };
      setUserData(data);
    };
    fetchUserData();
  }, []);

  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>
      <p>Hello, {userData.name}! What do you need help with today?</p>
      <p>Your last service: {userData.lastService}</p>
      <p>Upcoming booking: {userData.upcomingService}</p>
      <div className="actions">
        <button>Book a Service</button>
        <button>My Favorites</button>
        <button>Ongoing Services</button>
      </div>
    </div>
  );
}

export default Dashboard;