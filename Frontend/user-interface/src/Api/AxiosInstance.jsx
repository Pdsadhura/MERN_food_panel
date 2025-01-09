import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api", // Replace with your API base URL
  timeout: 10000, // Timeout for requests
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add authentication token to headers
    const token = localStorage.getItem("token"); // Replace with your token logic
    if (token) {
      config.headers["Authorization"] = `${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response;
  },
  (error) => {
    // alert("in");
    // Handle response errors
    if (error.response?.status === 403) {
      // Handle unauthorized error
      console.error("Unauthorized! Redirecting to login.");
      localStorage.clear();
      window.location.href = "/"; // Redirect to login page
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
