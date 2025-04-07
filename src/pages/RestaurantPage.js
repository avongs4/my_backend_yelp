// src/pages/RestaurantPage.js
import React from "react";
import { useParams } from "react-router-dom";

const RestaurantPage = () => {
  const { id } = useParams();

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Restaurant Details</h2>
      <p className="lead">You're viewing details for restaurant ID: <strong>{id}</strong></p>
      <p className="text-muted">More details coming soon!</p>
    </div>
  );
};

export default RestaurantPage;
