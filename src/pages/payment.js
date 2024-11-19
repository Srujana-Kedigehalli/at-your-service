/*
import React, { useState } from 'react';

function PaymentPage() {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Make an API call to your server for payment processing (you'll need to add actual payment gateway integration)
    console.log('Processing payment', paymentInfo);

    // Example: call an API endpoint for payment processing
    try {
      const response = await fetch('http://localhost:5001/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paymentInfo),
      });
      const data = await response.json();
      console.log('Payment response', data);
      // Handle success or failure (e.g., show a success message or error)
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <div className="payment-page">
      <h2>Payment Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={paymentInfo.expiryDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={paymentInfo.cvv}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
}

export default PaymentPage;
*/
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {QRCodeSVG} from 'qrcode.react';
import './PaymentPage.css';
function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { service, provider, selectedDate, address, notes, price } = location.state || {};

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    paymentMethod: 'card', // Default to card payment
    loading: false,
    paymentStatus: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
 /*
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Mock payment processing
    console.log('Processing payment', paymentInfo);

    // Simulate successful payment processing
    try {
      // For real payment integration, you will call a payment gateway API here
      const response = await fetch('http://localhost:5001/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paymentInfo),
      });

      const data = await response.json();
      console.log('Payment response', data);
      
      if (data.success) {
        // Navigate to confirmation page with booking details
        navigate('/confirmation', {
          state: location.state, // Pass the entire state received in PaymentPage
        });
      } else {
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="payment-page">
      <h2>Payment Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={paymentInfo.expiryDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={paymentInfo.cvv}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
}

export default PaymentPage;
*/
const handleSubmit = async (e) => {
  e.preventDefault();
  setPaymentInfo((prevState) => ({
    ...prevState,
   loading: true,
   }));

  // Simulate the payment process
  setTimeout(() => {
    setPaymentInfo((prevState) => ({
      ...prevState,
      loading: false,
      paymentStatus: 'success', // Change to 'error' for failure simulation
    }));

    // If payment is successful, navigate to the confirmation page
    if (paymentInfo.paymentStatus === 'success') {
      // Redirect to confirmation page with the necessary details
      navigate('/confirmation', {
        state: location.state,
        // state: { service, provider, selectedDate, address, notes, price },
      });
    }
  }, 2000); // Simulate a 2-second delay for payment processing
   
};

return (
  <div className="payment-page">
    <div className="payment-card">
      <h2 className="payment-title">Secure Payment</h2>

      <form onSubmit={handleSubmit}>
        <div className="payment-method">
          <label>Payment Method</label>
          <select
            name="paymentMethod"
            value={paymentInfo.paymentMethod}
            onChange={handleChange}
            className="input-field"
          >
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI (QR Code)</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        {paymentInfo.paymentMethod === 'card' && (
          <>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                placeholder="1234 5678 9876 5432"
                value={paymentInfo.cardNumber}
                onChange={handleChange}
                maxLength="19"
                required
                className="input-field"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={paymentInfo.expiryDate}
                  onChange={handleChange}
                  maxLength="5"
                  required
                  className="input-field"
                />
              </div>

              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="123"
                  value={paymentInfo.cvv}
                  onChange={handleChange}
                  maxLength="3"
                  required
                  className="input-field"
                />
              </div>
            </div>
          </>
        )}

        {paymentInfo.paymentMethod === 'upi' && (
          <div className="upi-container">
            <label>Scan to Pay (UPI)</label>
            <QRCodeSVG value="upi://pay?pa=your-upi-id@upi&pn=YourName&mc=0000&tid=1234567890&url=your-website.com" />
            <p>Scan this QR code with your UPI app to make the payment.</p>
          </div>
        )}

        {paymentInfo.paymentMethod === 'paypal' && (
          <div className="paypal-container">
            <button type="button" className="paypal-button">
              Pay with PayPal
            </button>
          </div>
        )}

        <div className="submit-container">
          <button type="submit" className="submit-button" disabled={paymentInfo.loading}>
            {paymentInfo.loading ? 'Processing Payment...' : 'Submit Payment'}
          </button>
        </div>
      </form>

      {paymentInfo.loading && (
        <div className="progress-bar">
          <div className="progress" />
        </div>
      )}

      {paymentInfo.paymentStatus && (
        <div className={`payment-status ${paymentInfo.paymentStatus}`}>
          {paymentInfo.paymentStatus === 'success' ? 'Payment Successful' : 'Payment Failed'}
        </div>
      )}
    </div>
  </div>
);
}

export default PaymentPage;
