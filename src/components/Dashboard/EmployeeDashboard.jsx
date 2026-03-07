import Header from "../elements/Header.jsx";
import TaskList from "../elements/TaskList.jsx";
import TaskListNumber from "../elements/TaskListNumber.jsx";
import "../styles/employeeDashboard.min.css";

const EmployeeDashboard = ({ data, handleLogout }) => {
  return (
    <div className="employeeDashboard">
      <div>
        <Header data={data} handleLogout={handleLogout} />
        <TaskListNumber data={data} />
        <TaskList data={data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
