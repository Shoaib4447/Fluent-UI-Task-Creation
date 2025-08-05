import axiosInstance from "./axiosInstance";

const authService = {
  signUpUser: (userData) => axiosInstance.post("/auth/register", userData),
};

export default authService;
