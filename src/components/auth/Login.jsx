/* eslint-disable no-unused-vars */
import { useState } from "react";
import "../styles/login.min.css";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form
          className="login-form"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h2>Login</h2>
          <div className="input-box">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label>Email</label>
          </div>

          <div className="input-box">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label>Password</label>
          </div>

          <button className="login-button" type="submit">
            Login
          </button>

          {/* f */}
        </form>
      </div>
    </div>
  );
};

export default Login;
