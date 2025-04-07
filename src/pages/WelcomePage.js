import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="text-center mt-5">
      <h1 className="display-4 mb-4">Welcome to Yelp Clone</h1>
      <p className="lead mb-4">
        Discover the best places to eat near you.
      </p>
      <Link to="/restaurants" className="btn btn-primary btn-lg">
        Browse Restaurants
      </Link>
    </div>
  );
};

export default WelcomePage;
