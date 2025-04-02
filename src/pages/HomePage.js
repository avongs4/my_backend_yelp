import React from "react";
import { Link } from "react-router-dom";

const restaurants = [
  { id: 1, name: "Pasta Palace", rating: 4.5 },
  { id: 2, name: "Sushi Spot", rating: 4.8 },
];

function HomePage() {
  return (
    <div>
      <h1>Restaurant Listings</h1>
      <ul>
        {restaurants.map((r) => (
          <li key={r.id}>
            <Link to={`/restaurant/${r.id}`}>{r.name} - ⭐ {r.rating}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
