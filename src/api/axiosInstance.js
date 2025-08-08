import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// To attach token in each req
// Axios Interceptors — a feature in Axios that lets you:
axiosInstance.interceptors.request.use(
  // config is the Axios request configuration object.
  // Automatically run some logic before (or after) a request is sent.
  (config) => {
    // get token from local storage
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`; //attach token to req
    return config;
  },
  // In case of any error reject promise
  (error) => {
    Promise.reject(error);
  }
);

export default axiosInstance;
