import axios from "../api/axiosconfig";
import { loaduser } from "./UserSlice";

export const asyncgetusers = () => async (dispatch, getState) => {
  try {
    console.log("Current  State >>>>", getState());

    const res = await axios.get("/users");
    // console.log(res);
    dispatch(loaduser(res.data));
  } catch (error) {
    console.log(error);
  }
};
