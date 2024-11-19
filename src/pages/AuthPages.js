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

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (isLogin) {
      // Login logic
      const loginData = {
        email: formData.email.trim(),
        password: formData.password.trim(),
      };
  
      try {
        const response = await fetch('http://localhost:5001/api/users/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(loginData),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Login failed:', errorData.message);
          alert(errorData.message); // Optional
          return;
        }
  
        const data = await response.json();
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } catch (error) {
        console.error('Error during login:', error);
      }
    } else {
      // Signup logic
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
  
      const signupData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password.trim(),
        role: formData.role, // Ensure role is captured from the form
      };
  
      try {
        const response = await fetch('http://localhost:5001/api/users/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(signupData),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Signup failed:', errorData.message);
          alert(errorData.message); // Optional
          return;
        }
  
        const data = await response.json();
        alert("Signup successful! Please log in.");
        setIsLogin(true); // Switch to login form after successful signup
      } catch (error) {
        console.error('Error during signup:', error);
      }
    }
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
