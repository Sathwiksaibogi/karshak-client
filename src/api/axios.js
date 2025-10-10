import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api', // Your backend API URL
});

// Interceptor to add the auth token to every request
apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token'); // Or get it from cookies
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;