import React, { useEffect, useState } from 'react';
import axios from './axiosConfig'; // Import axios for API calls

const UserScreen = ({ match }) => {
  const [user, setUser] = useState(null);
  const userId = match.params.id; // Get user ID from URL

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users/${userId}`);
      setUser(response.data);
    };
    fetchUser();
  }, [userId]);

  if (!user) return <div>Loading...</div>; // Show loading state

  return (
    <div>
      <h1>{user.username}</h1>
      <p>ID: {user.id}</p>
      <p>Admin: {user.is_admin ? 'Yes' : 'No'}</p>
      <p>Staff: {user.is_staff ? 'Yes' : 'No'}</p>
      <p>Active: {user.is_active ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default UserScreen;
