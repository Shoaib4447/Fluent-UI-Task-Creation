import TaskCard from "../Card/TaskCard";
import { makeStyles } from "@fluentui/react-components";
const useStyles = makeStyles({
  tasksCardContainer: {
    display: "flex",
    justifyContent: "start",
    flexWrap: "wrap",
    gap: "2rem",
  },
});
const TasksList = ({ tasks }) => {
  const styles = useStyles();
  return (
    <div className={styles.cardSection}>
      <div className={styles.tasksCardContainer}>
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TasksList;
