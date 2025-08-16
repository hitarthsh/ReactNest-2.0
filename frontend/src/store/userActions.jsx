import axios from "../api/axiosconfig";
import { loaduser } from "./UserSlice";

export const asyncgetusers = async () => {
  try {
    const res = await axios.get("/users");
    console.log(res);
    loaduser(res.data);
  } catch (error) {
    console.log(error);
  }
};
