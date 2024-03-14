import axios from 'axios';
import axiosInstance from './axiosInstance';
import Cookies from 'js-cookie';

export const apiCall = async ({
  method,
  route,
  data,
  skipAuth,
  isDownload,
  filename
}) => {
  const url = `${SERVER_URL}${route}`;
  let headers = {
    'Content-Type': 'application/json',
  };
  if (isDownload) {
    headers.responseType = 'blob'
  }

  if (skipAuth) {
    try {
      const response = await axios({
        method,
        url,
        headers,
        data,
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        if (error.response.data.code === REDIRECT_CODE) {
        
          return;
        } else {
          throw error.response.data.error.error_message;

        }
      } else if (error.request) {

        console.log('Error', error.request);
      } else {

        console.log('Error:', error.message);
      }
    }

  } else {

    try {
      const response = await axiosInstance({
        method,
        url,
        headers,
        data,
      });
      if (isDownload) {
        fileDownload(response.data, `${filename}.tar`);
        return;
      }
      else {
        return response.data;
      }

    } catch (error) {
      if (error.response) {
        throw error.response.data.error.error_message;
      } else if (error.request) {
        console.log('Error', error.request);
      } else {

        console.log('Error:', error.message);
      }
    }
  }
};
