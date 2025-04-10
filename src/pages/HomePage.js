// src/pages/HomePage.js
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Helper for query string
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// Default demo restaurants
const defaultRestaurants = [
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
    image: "https://source.unsplash.com/600x400/?masa",
  },
  {
    id: 3,
    name: "Heaven",
    category: "Tuwo",
    rating: 4.2,
    image: "https://source.unsplash.com/600x400/?tuwo",
  },
];

const HomePage = () => {
  const query = useQuery();
  const search = query.get("search")?.toLowerCase() || "";

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const localRestaurants = JSON.parse(localStorage.getItem("restaurants")) || [];
    setRestaurants([...defaultRestaurants, ...localRestaurants]);
  }, []);

  const filtered = restaurants.filter((r) =>
    r.name.toLowerCase().includes(search)
  );

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Browse Restaurants</h2>

      <div className="row">
        {filtered.length === 0 ? (
          <p className="text-center">No restaurants found.</p>
        ) : (
          filtered.map((r) => (
            <div className="col-md-4 mb-4" key={r.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={r.image}
                  className="card-img-top"
                  alt={r.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
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
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
