import "../styles/taskListNumber.min.css";

const TaskListNumber = ({ data }) => {
  return (
    <div className="taskListNumber">
      <div className="tasks">
        <div className="task">
          <h1>{data?.taskNumbers?.newTask}</h1>
          <h2>New Task</h2>
        </div>

        <div className="task">
          <h1>{data?.taskNumbers?.completed}</h1>
          <h2>Completed Title</h2>
        </div>

        <div className="task">
          <h1>{data?.taskNumbers?.active}</h1>
          <h2>Active Title</h2>
        </div>

        <div className="task">
          <h1>{data?.taskNumbers?.failed}</h1>
          <h2>Failed Title</h2>
        </div>
      </div>
    </div>
  );
};

export default TaskListNumber;
