import { Outlet } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
