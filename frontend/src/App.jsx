import React from "react";
import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="px-[10%] text-white font-thin w-screen h-screen bg-gray-800">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
