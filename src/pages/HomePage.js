// src/pages/HomePage.js
import React from "react";
import { Link } from "react-router-dom";

const restaurants = [
  {
    id: 1,
    name: "Harry's Pizza",
    category: "Pizza",
    rating: 4.5,
    image: "https://source.unsplash.com/600x400/?pizza",
  },
  {
    id: 2,
    name: "Masa World",
    category: "Masa",
    rating: 4.7,
    image: "https://source.unsplash.com/600x400/?sushi",
  },
  {
    id: 3,
    name: " Heaven",
    category: "Tuwo",
    rating: 4.2,
    image: "https://source.unsplash.com/600x400/?hotdog",
  },
];

const HomePage = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Search restaurants...</h2>

      <div className="row">
        {restaurants.map((r) => (
          <div className="col-md-4 mb-4" key={r.id}>
            <div className="card h-100 shadow-sm">
              <img src={r.image} className="card-img-top" alt={r.name} />
              <div className="card-body">
                <h5 className="card-title">{r.name}</h5>
                <p className="card-text text-muted">{r.category}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-warning fw-bold">⭐ {r.rating}</span>
                  <Link
                    to={`/restaurant/${r.id}`}
                    className="btn btn-sm btn-outline-primary"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;