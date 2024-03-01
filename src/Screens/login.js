import React, { useState, useEffect } from 'react';
import './login.css';
import bcrypt from 'bcryptjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation for empty fields
    if (!username || !password) {
      setErrorMessage('Please enter both username and password.');
      return;
    }

    // Hash the password securely before comparison
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Simulate backend response (replace with actual API call)
      const mockUsers = [
        { username: 'Admin', password: '$2b$10$f1608u.9vU8.13u40w00eOBK9/t60/y29758s2K2a1y6459jK1Y' }, // Hashed "Admin@#123"
      ];

      const user = mockUsers.find(
        (u) => u.username === username && bcrypt.compareSync(password, u.password)
      );

      if (user) {
        // Handle successful login and store user information (replace with secure storage)
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/main-dashboard'); // Redirect to main dashboard
      } else {
        setErrorMessage('Invalid credentials.');
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
          src="../Assests/Logos/logo-login.png"
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
