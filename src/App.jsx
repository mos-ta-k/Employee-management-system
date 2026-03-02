/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import Login from "./components/auth/Login";
import "../src/components/styles/main.min.css";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import {
  admin,
  employees,
  getLocalStarage,
  setLocalStorage,
} from "./utils/LocalStorage";
import { useState } from "react";
import { AuthContext } from "./context/authProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const Authdata = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
    } else if (email == "user@me.com" && password == "123") {
      setUser("employee");
    } else {
      alert("invalid credentials!");
    }
  };

  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </div>
  );
};

export default App;
