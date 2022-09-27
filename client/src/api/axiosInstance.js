import axios from "axios";

const axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
            'Content-Type': 'application/json'
      }
});

console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL);

axiosInstance.interceptors.request.use(function (config) {
      config.headers.common.Authorization = `Bearer ${localStorage.getItem('access_token')}`
      return config;
}, function (error) {
      return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
      return response.data;
}, function (error) {
      return Promise.reject(error.response.data);
});
export default axiosInstance;
