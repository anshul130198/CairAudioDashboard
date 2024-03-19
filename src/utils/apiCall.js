// api.js

import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/'; // Replace this with your base API URL

// Create a custom Axios instance
const apiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to handle authentication
apiInstance.interceptors.request.use(
  (config) => {
    // Add authentication logic here if needed
    // For example:
    const token = 'Bearer ' + localStorage.getItem('token');
    config.headers.Authorization = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle errors
apiInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error.response.data.error || error.message);
  }
);

const apiCall = async ({ endpoint, method = 'GET', data = null }) => {
  try {
    const response = await apiInstance({
      method,
      url: endpoint,
      data,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default apiCall;
