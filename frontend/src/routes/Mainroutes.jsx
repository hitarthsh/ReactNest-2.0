import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Products from "../page/products";
import Login from "../page/Login";
import Register from "../page/Register";

function Mainroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
}

export default Mainroutes;
