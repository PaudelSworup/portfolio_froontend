import React from "react";
import Home from "./components/Navigations/Home";
import { BrowserRouter } from "react-router-dom";
import RoutesMap from "./components/Routes/RoutesMap";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <RoutesMap />
      </BrowserRouter>
    </>
  );
};

export default App;
