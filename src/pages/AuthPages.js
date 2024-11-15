// AuthPages.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPages.css';

const AuthPages = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const endpoint = isLogin 
      ? 'http://localhost:5001/api/users/login' 
      : 'http://localhost:5001/api/users/signup';

    const body = JSON.stringify(isLogin 
      ? { email: formData.email, password: formData.password }
      : { name: formData.name, email: formData.email, password: formData.password });

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body
      });

      const data = await response.json();

      if (response.ok) {
        const token = data.token;
        localStorage.setItem('token', token);  // Store token
        localStorage.setItem('userId', data._id);
        navigate('/dashboard');
      } else {
        alert(data.message || 'An error occurred');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };


  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        {isLogin ? (
          <div className="auth-form login">
            <h2>Login</h2>
            <div className="form-group">
              <label>Username</label>
              <input name="email" type="text" placeholder="Username" value={formData.email} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
            </div>
            <button onClick={handleSubmit} className="auth-button">Login</button>
          </div>
        ) : (
          <div className="auth-form signup">
            <h2>Sign Up</h2>
            <div className="form-group">
              <label>Username</label>
              <input name="name" type="text" placeholder="Username" value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input name="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>I am a:</label>
              <select name="role" value={formData.role} onChange={handleInputChange}>
                <option value="">Select an option</option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <button onClick={handleSubmit} className="auth-button">Sign Up</button>
          </div>
        )}
      </div>
      <button onClick={toggleForm} className="toggle-button">
        {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Login'}
      </button>
    </div>
  );
};

export default AuthPages;



/*
const AuthPages = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const endpoint = `http://localhost:5000/api/${isLogin ? 'login' : 'signup'}`;
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } else {
      alert(data.message || 'An error occurred');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  }
};

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      name: ''
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Welcome to At Your Service</h1>
          <p className="auth-subtitle">
            {isLogin ? 'Login to access your account' : 'Create a new account'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
          )}

          <button type="submit" className="submit-button">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>

          <button
            type="button"
            onClick={toggleForm}
            className="toggle-button"
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPages;
*/
