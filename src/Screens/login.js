import React from 'react';
import './login.css'; // Import your CSS file for styling

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm">
        {/* Replace with your logo image */}
        <img src="" alt="Company Logo" className="mb-3 mx-auto d-block" />
        <p className="text-center mb-4">Sign In to Continue</p>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <input type="text" className="form-control" id="username" name="username" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input type="password" className="form-control" id="password" name="password" />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Login</button>
        </form>
        <div className="mt-4 text-center">
          <p>SasiaNet | Financial Suite</p>
          <p className="text-muted">Powered By SasiaNet (Private) Limited.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
