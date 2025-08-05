import authService from "./authService";
import { setUser } from "../features/auth/authSlice";
export const signUpUser = async (userData, dispatch) => {
  try {
    const res = await authService.signUpUser(userData);
    const username = res.data.user.name;
    const token = res.data.token;
    dispatch(setUser({ username, token }));
  } catch (error) {
    console.log("error on signUpUser=>", error);
  }
};
