import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthPages from './pages/AuthPages';
import HomePage from './pages/HomePage';
import Services from './pages/services';
import Dashboard from './pages/Dashboard';

import ServicesOverview from './pages/serviceList';
import PrivateRoute from './pages/PrivateRoute';
import Checkout from './pages/checkout';
import PaymentPage from './pages/payment';
import ConfirmationPage from './pages/confirmationPage';
import HelpPage from './pages/helpPage';
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>

function App() {
  return (
    
      <div className="App">
      <Router>
        
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
            <Route path="/serviceList" element={<ServicesOverview />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />

            <Route path="/help" element={<HelpPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </div>
   
      </Router>
    </div>
  );
}

export default App;







