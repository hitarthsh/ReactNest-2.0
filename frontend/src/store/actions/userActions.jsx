import axios from "../../api/axiosconfig";
import { toast } from "react-toastify";

export const asyncloginuser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );

    // 🔥 Full Axios dataponse
    console.log("Full login dataponse:", data);

    if (data.data.length > 0) {
      toast.success("Login successfully!", {
        autoClose: 3000,
      });
      // dispatch({ type: "LOGIN_SUCCESS", payload: data.data[0] });
    } else {
      toast.error("Invalid email or password!", {
        autoClose: 3000,
      });
    }
  } catch (error) {
    console.error("Login error full:", error);

    toast.error(error.dataponse?.data?.message || "Login failed. Try again!", {
      autoClose: 3000,
    });
  }
};

export const asyncregisteruser = (user) => async (dispatch, getState) => {
  try {
    const data = await axios.post("/users", user);

    // console.log("Full register dataponse:", data);

    toast.success("User registered successfully!");
  } catch (error) {
    // console.error("Register error full:", error);

    toast.error(
      error.dataponse?.data?.message || "Registration failed. Try again!",
      {
        autoClose: 3000,
      }
    );
  }
};
