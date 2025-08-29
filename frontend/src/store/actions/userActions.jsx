import axios from "../../api/axiosconfig";
import { toast } from "react-toastify";

export const asyncregisteruser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    console.log(res);

    toast.success("User registered successfully!");
  } catch (error) {
    toast.error("Registration failed. Try again!");
  }
};
