import React, { useState, useEffect } from 'react';
import './login.css';
import bcrypt from 'bcryptjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage('Please enter both username and password.');
      return;
    }

    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password: hashedPassword }),
      });

      if (response.ok) {
        // On successful login, handle logic based on your application structure
        // (e.g., store tokens, redirect to dashboard, etc.)
        console.log('Login successful!');
        // Replace with your desired behavior on successful login
        // (e.g., set a flag for redirection or further processing)
        // setLoggedIn(true); // Replace with your logic to mark user as logged in
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Invalid credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  useEffect(() => {
    setErrorMessage('');
  }, [username, password]);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm">
        <img
          src="../../Assests/Logos/logo-login.png"
          alt="Logo"
          className="logo-image"
        />
        <br />
        <p className="text-center mb-4">Sign In to Continue</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="password-toggle-btn"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>SasiaNet | Financial Suite</p>
          <p className="text-muted">Powered By SasiaNet (Private) Limited</p>
        </div>
      </div>
    </div>
  );
};

export default Login