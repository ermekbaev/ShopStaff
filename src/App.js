import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <>
      <Navbar />
      <MainRoutes className="routes" />
    </>
  );
};

export default App;
