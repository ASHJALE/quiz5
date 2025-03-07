import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, loginSuccess, loginFail } from './slices/userSlice';
import Spinner from './Spinner';
import Message from './Message';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest());

    // Simulate an API call
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        dispatch(loginSuccess({ username }));
      } else {
        dispatch(loginFail('Invalid credentials'));
      }
    }, 1000);
  };

  return (
    <div>
      <h2>Login</h2>
      {loading && <Spinner />}
      {error && <Message variant="danger">{error}</Message>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
