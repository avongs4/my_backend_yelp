import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import LoginPage from "./pages/LoginPage";
import "./index.css";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/restaurant/:id" element={<RestaurantPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
