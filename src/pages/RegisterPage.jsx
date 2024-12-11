import React from "react";
import "./RegisterPage.css";
import Header from "../components/Header";
const RegisterPage = () => {
  return (
    <div className="register-page">
      <Header />
      <div className="register-container">
        <h2>Register</h2>
        <p className="register-description">
          In order to register with BulkSMS, we need to first verify your email address.
        </p>
        <form className="register-form">
          <label htmlFor="email" className="email-label">
            Email address:
          </label>
          <div className="input-container">
            <input
              type="email"
              id="email"
              className="email-input"
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="send-code-btn">
              Send code
            </button>
          </div>
        </form>
        <p className="login-link">
          <a href="/">Already have an account?</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
