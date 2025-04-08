// src/pages/HomePage.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

// Helper to read URL query params
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

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

  const filteredRestaurants = restaurants.filter((r) =>
    r.name.toLowerCase().includes(search)
  );

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">
        {search ? `Results for "${search}"` : "All Restaurants"}
      </h2>

      {filteredRestaurants.length > 0 ? (
        <div className="row">
          {filteredRestaurants.map((r) => (
            <div className="col-md-4 mb-4" key={r.id}>
              <div className="card h-100 shadow-sm border-0">
                <img src={r.image} className="card-img-top" alt={r.name} />
                <div className="card-body">
                  <h5 className="card-title">{r.name}</h5>
                  <p className="card-text text-muted">{r.category}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-warning fw-bold">
                      ⭐ {r.rating.toFixed(1)}
                    </span>
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
      ) : (
        <p className="text-center text-muted">No restaurants found.</p>
      )}
    </div>
  );
};

export default HomePage;
