import React from "react";
import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // 👈 don’t forget styles

const App = () => {
  return (
    <div className="px-[10%] text-white font-thin w-screen h-screen bg-gray-800">
      <Nav />
      <Mainroutes />

      {/* ✅ Toast config */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default App;
