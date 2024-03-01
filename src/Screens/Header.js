import React from 'react';
import './Header.css'; // Import your styling file

const Header = () => {
  return (
    <header className="header">
      <img src="logo.png" alt="Company Logo" />
      <h1>Company Name</h1>
      <nav>
        {/* Replace with your navigation links */}
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        {/* ... */}
      </nav>
    </header>
  );
};

export default Header;
