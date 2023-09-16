import "./App.css";
import Router from "./router";
import { ToastContainer } from "react-toastify";

// global styles
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Router />
    </>
  );
}

export default App;
