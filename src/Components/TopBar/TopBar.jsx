import { makeStyles, Input, Select, Button } from "@fluentui/react-components";
import { Search24Regular } from "@fluentui/react-icons";
// Styles
const useStyles = makeStyles({
  // Layout utilities
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    gap: "16px",
    boxSizing: "border-box",
  },
  half: {
    flex: "1 1 0",
    minWidth: "0",
    maxWidth: "50%",
    boxSizing: "border-box",
    "@media (max-width: 600px)": {
      maxWidth: "100%",
      flex: "1 1 100%",
    },
  },
  third: {
    flex: "1 1 0",
    minWidth: "0",
    maxWidth: "33.33%",
    boxSizing: "border-box",
    "@media (max-width: 900px)": {
      maxWidth: "100%",
      flex: "1 1 100%",
    },
  },
  full: {
    width: "100%",
    boxSizing: "border-box",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    marginBottom: "12px",
  },
  // Custom Classes
  formContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  searchTask: {
    flex: "1 1 0",
    // minWidth: "0",
    // maxWidth: "45%",
    // boxSizing: "border-box",
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  seachField: {
    width: "100%",
  },
  toDo: {
    width: "20%",
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  assingedTo: {
    width: "20%",
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  button: {
    width: "10%",
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
});

const TopBar = ({ onCreateClick }) => {
  const styles = useStyles();
  return (
    <div>
      {/* Filter Form */}
      <form className={styles.formContainer}>
        <div className={styles.half}>
          <Input
            id='search'
            placeholder='Search...'
            contentBefore={<Search24Regular />}
            className={styles.full}
          />
        </div>
        <div className={styles.toDo}>
          <Select placeholder='Select Status'>
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </Select>
        </div>
        <div className={styles.assingedTo}>
          <Select placeholder='Assigned to'>
            <option>Ali</option>
            <option>Fatima</option>
            <option>Ahmed</option>
          </Select>
        </div>
        <Button appearance='primary' onClick={onCreateClick}>
          Create
        </Button>
        {/* Dialog Create Task */}
      </form>
    </div>
  );
};

export default TopBar;
