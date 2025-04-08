import React, { useState } from "react";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import WelcomePage from "./pages/WelcomePage";
import AddRestaurantPage from "./pages/AddRestaurantPage";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  

// ✅ Protected Route wrapper
const ProtectedRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/restaurants?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <div className="App">
      {/* ✅ Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Yelp Clone</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Search Bar */}
            <form className="d-flex me-auto" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search restaurants"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-outline-light" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>

            {/* Nav Links */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/restaurants">Restaurants</Link>
              </li>

              {/* ✅ For Business Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="businessDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  For Business
                </a>
                <ul className="dropdown-menu" aria-labelledby="businessDropdown">
                  <li>
                    <Link className="dropdown-item" to="/add-restaurant">
                      Add Your Business
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/business-login">
                      Business Login
                    </Link>
                  </li>
                  {/* New "View All Businesses" Link */}
                  <li>
                    <Link className="dropdown-item" to="/view-businesses">
                      View All Businesses
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Auth Buttons */}
              {isLoggedIn ? (
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/create-account">Create Account</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* ✅ Routes */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/restaurants" element={<HomePage />} />
          <Route path="/restaurant/:id" element={<RestaurantPage />} />
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/create-account" element={<CreateAccountPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route
            path="/add-restaurant"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <AddRestaurantPage />
              </ProtectedRoute>
            }
          />
          {/* Add a route for the "View All Businesses" page */}
          <Route path="/view-businesses" element={<div>All Businesses Page</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
