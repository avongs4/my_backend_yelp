// src/pages/AddRestaurantPage.js
import React, { useState } from "react";

const AddRestaurantPage = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRestaurant = {
      name,
      category,
      image,
      rating: 0, // Default rating
    };

    console.log("Restaurant added:", newRestaurant);
    alert("Restaurant added successfully!");
    // You could also send this data to an API or add to state
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Your Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Restaurant Name</label>
          <input
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            className="form-control"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default AddRestaurantPage;