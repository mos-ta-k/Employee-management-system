import { useContext, useState } from "react";
import "../src/components/styles/main.min.css";
import Login from "./components/auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/authProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const Authdata = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  // useEffect(() => {
  //   if (Authdata) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [Authdata]);

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
          JSON.stringify({ role: "employee" }),
        );
      }
    } else {
      alert("invalid credentials!");
    }
  };

  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard />
      ) : user == "employee" && loggedInUserData ? (
        <EmployeeDashboard data={loggedInUserData} />
      ) : null}
    </div>
  );
};

export default App;
