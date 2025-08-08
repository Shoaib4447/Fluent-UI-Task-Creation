import authService from "./authService";
import { toast } from "react-toastify";
// register
export const signUpUser = async (userData) => {
  try {
    const res = await authService.signUp(userData, navigate);
    toast.success("Successfull SignUp");
    navigate("/login");
  } catch (error) {
    toast.error(error);
  }
};

// login
export const loginUser = async (credentials, navigate) => {
  try {
    const res = await authService.logIn(credentials);
    toast.success(res.data.message);
    localStorage.setItem("token", res.data.token);
    navigate("/");
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("error loginapi=>", error);
  }
};
