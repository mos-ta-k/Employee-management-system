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

  useEffect(() => {
    if (Authdata) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        setUser(loggedInUser.role);
      }
    }
  }, [Authdata]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (
      Authdata &&
      Authdata.employees.find((e) => email && password == password)
    ) {
      setUser("employee");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee" }),
      );
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
