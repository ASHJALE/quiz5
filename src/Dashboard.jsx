import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom'; // Import useHistory for navigation


import Card from './Card';
import Table from './Table';

const Dashboard = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', description: 'Description for Product 2' },
  ]);
  const [users] = useState([
    { id: 1, username: 'User1', is_admin: false, is_staff: true, is_active: true },
    { id: 2, username: 'User2', is_admin: true, is_staff: false, is_active: true },
  ]);


  const history = useHistory(); // Initialize history for navigation

  useEffect(() => {
    // Mock data is used, so no fetch is needed
    // axios is no longer needed


  }, []);
  
  const handleUserRedirect = (userId) => {
    history.push(`/user/${userId}`); // Redirect to UserScreen with userId
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="product-list row">
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <Table users={users} />
      <div className="user-list">
        {users.map(user => (
          <button key={user.id} onClick={() => handleUserRedirect(user.id)}>View User</button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
