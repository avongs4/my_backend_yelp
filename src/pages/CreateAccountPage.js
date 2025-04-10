// src/pages/CreateAccountPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccountPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (pwd) => {
    const minLength = /.{6,}/;
    const hasNumber = /\d/;
    const hasUpperCase = /[A-Z]/;

    if (!minLength.test(pwd)) return "Password must be at least 6 characters.";
    if (!hasNumber.test(pwd)) return "Password must include at least one number.";
    if (!hasUpperCase.test(pwd)) return "Password must include at least one uppercase letter.";
    return "";
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    const validationError = validatePassword(password);
    if (validationError) {
      setError(validationError);
      return;
    }

    // Save to localStorage
    localStorage.setItem("user", JSON.stringify({ email, password }));
    console.log("Account created:", { email, password });
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="container mt-5">
      <h2>Create Account</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleCreateAccount}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccountPage;
