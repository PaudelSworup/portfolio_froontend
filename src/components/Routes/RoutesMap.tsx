import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Navigations/Home";
import About from "../Navigations/About";
import Portfolio from "../Navigations/Portfolio";
import ProjectDetail from "../Navigations/ProjectDetail";

const RoutesMap = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Portfolio />} />
      <Route path="/projects/details/:id" element={<ProjectDetail />} />
    </Routes>
  );
};

export default RoutesMap;
