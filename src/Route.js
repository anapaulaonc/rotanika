import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import QuestionPage from "./Pages/QuestionPage";

const RoutesComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<HomePage />} path="/" exact />
      <Route element={<QuestionPage />} path="/question" />
    </Routes>
  </BrowserRouter>
);

export default RoutesComponent;
