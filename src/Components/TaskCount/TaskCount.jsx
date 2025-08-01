import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  totalTasks: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: "0%",
  },
});

const TaskCount = ({ taskFound }) => {
  const styles = useStyles();
  return <div className={styles.totalTasks}>Tasks: {taskFound.length}</div>;
};

export default TaskCount;
