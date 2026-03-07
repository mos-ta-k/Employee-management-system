import React from "react";
import "../styles/employeeDashboard.min.css";
import Header from "../elements/Header.jsx";
import TaskListNumber from "../elements/TaskListNumber.jsx";
import TaskList from "../elements/TaskList.jsx";

const EmployeeDashboard = ({ data }) => {
  return (
    <div className="employeeDashboard">
      <div>
        <Header data={data} />
        <TaskListNumber data={data} />
        <TaskList data={data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
