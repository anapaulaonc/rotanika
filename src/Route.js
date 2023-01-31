import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";

const RoutesComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<HomePage />} path="/" exact />
    </Routes>
  </BrowserRouter>
);
export default RoutesComponent;
