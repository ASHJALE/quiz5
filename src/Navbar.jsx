import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
  return (
    <nav>
      <h1>My Application</h1>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
