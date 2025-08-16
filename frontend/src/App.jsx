import { useEffect } from "react";
import { asyncgetusers } from "./store/userActions";

const App = () => {
  useEffect(() => {
    asyncgetusers()
  }, []);
  return <div>App</div>;
};

export default App;
