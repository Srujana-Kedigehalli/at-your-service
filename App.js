import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPages from './pages/AuthPages';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import Dashboard from './pages/Dashboard';
import ServiceHistory from './pages/ServiceHistory';
import StatusTracker from './pages/StatusTracker';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<AuthPages />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/servicehistory" element={<ServiceHistory />} />
          <Route path='/statustracker' element={<StatusTracker/>}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;


