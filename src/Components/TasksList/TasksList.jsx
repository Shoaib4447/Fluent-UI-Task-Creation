import TaskCard from "../Card/TaskCard";
const TasksList = ({ tasks }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      {tasks.map((task, index) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TasksList;
