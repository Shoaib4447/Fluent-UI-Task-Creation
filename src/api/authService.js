import axiosInstance from "./axiosInstance";

const authService = {
  signUp: (userData) => axiosInstance.post("/auth/register", userData),
  logIn: (credentials) => axiosInstance.post("/auth/login", credentials),
};

export default authService;
