import axios from "../../api/axiosconfig";
import { toast } from "react-toastify";

export const asyncregisteruser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    console.log(res);

    // ✅ Success toast
    toast.success("User registered successfully!", {
      position: "top-center",
      autoClose: 3000,
      theme: "dark",
    });

  } catch (error) {
    // ❌ Error toast
    toast.error(
      error.response?.data?.message || "Registration failed. Try again!",
      {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      }
    );
  }
};
