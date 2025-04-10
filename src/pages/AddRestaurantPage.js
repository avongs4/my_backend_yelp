// src/pages/AddRestaurantPage.js
import React, { useState } from "react";

const AddRestaurantPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    rating: "",
    image: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRestaurant = { ...formData, id: Date.now() };

    // Get existing restaurants from localStorage
    const existing = JSON.parse(localStorage.getItem("restaurants")) || [];

    // Save updated list
    localStorage.setItem("restaurants", JSON.stringify([...existing, newRestaurant]));

    setSuccess(true);
    setFormData({ name: "", category: "", rating: "", image: "" });
  };

  return (
    <div className="container mt-4">
      <h2>Add Your Business</h2>
      {success && <div className="alert alert-success">Restaurant added successfully!</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Rating</label>
          <input
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            type="number"
            step="0.1"
            min="0"
            max="5"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Restaurant</button>
      </form>
    </div>
  );
};

export default AddRestaurantPage;
