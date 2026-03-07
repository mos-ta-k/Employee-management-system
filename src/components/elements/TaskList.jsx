import "../styles/tasklist.min.css";

const TaskList = ({ data }) => {
  return (
    <div className="tasklist">
      <div className="tasks">
        {data?.tasks?.map((task, idx) => (
          <div key={idx} className="task">
            <div className="top">
              <p className="priority">{task.category}</p>
              <p className="date">{task.date}</p>
            </div>
            <h1 className="task-title">{task.title}</h1>
            <p className="task-description">
              {task.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
