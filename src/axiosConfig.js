import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api', // Updated to point to the local backend API

});

export default instance;
