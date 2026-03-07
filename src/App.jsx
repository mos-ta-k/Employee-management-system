import { useContext, useState } from "react";
import "../src/components/styles/main.min.css";
import Login from "./components/auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/authProvider";

const App = () => {
  const [user, setUser] = useState(() => {
    try {
      const loggedInUser = localStorage.getItem("loggedInUser");
      return loggedInUser ? JSON.parse(loggedInUser).role : null;
    } catch {
      return null;
    }
  });
  const Authdata = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(() => {
    try {
      const loggedInUser = localStorage.getItem("loggedInUser");
      return loggedInUser ? JSON.parse(loggedInUser).data : null;
    } catch {
      return null;
    }
  });

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (Authdata) {
      const allEmployees = Authdata.employees.reduce((acc, item) => {
        if (item && Array.isArray(item.employees)) {
          return acc.concat(item.employees);
        }
        acc.push(item);
        return acc;
      }, []);

      const employee = allEmployees.find(
        (e) => e.email === email && e.password === password,
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee }),
        );
      } else {
        alert("Invalid credentials!");
      }
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setLoggedInUserData(null);
  };

  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard handleLogout={handleLogout} />
      ) : user == "employee" && loggedInUserData ? (
        <EmployeeDashboard data={loggedInUserData} handleLogout={handleLogout} />
      ) : null}
    </div>
  );
};

export default App;
