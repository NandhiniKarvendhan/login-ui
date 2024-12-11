import React, { useState } from "react";
import Header from "../components/Header";
import "./LoginForm.css";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); 
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    try {
      const response = await axios.post(`${API_BASE_URL}/login`, {
        username,
        password,
      });

      if (response.data.success) {
        setSuccess(response.data.message || "Login successful!");
        localStorage.setItem("token", response.data.token);
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1500);
      } else {
        setError(response.data.message || "Login failed.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="title-container">
        <h2 className="form-title">Log In</h2>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}</div>
        <form className="form-container" onSubmit={handleLogin}>
          <div className="form-row">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="form-input"
              placeholder="Your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Loading..." : "Log In"}
            </button>
            <div className="links">
              <a href="/forgot-password">Forgotten your username or password?</a>
              <a href="/register">Register new account</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
