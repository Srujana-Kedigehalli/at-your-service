import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthPages from './pages/AuthPages';
import HomePage from './pages/HomePage';
import Services from './pages/services';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import PrivateRoute from './pages/PrivateRoute';
import Checkout from './pages/checkout';
function App() {
  return (
    
      <div className="App">
      <Router>
        <Navbar/>
        <div className='pages'>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<AuthPages />} />
            <Route path="/signup" element={<AuthPages />} />
            <Route path="/services" element={<Services />} />
            <Route path="/dashboard" element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
            <Route path="/checkout" element={<Checkout />} />
   
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;







