// api.js

import axios from 'axios';
import { SERVER_URL } from '../Constants/constants';
// Create a custom Axios instance
const apiInstance = axios.create({
  baseURL: SERVER_URL,
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

export const apiCall = async ({ endpoint, method = 'GET', data = null }) => {
  console.log( endpoint, method, data ,">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
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

