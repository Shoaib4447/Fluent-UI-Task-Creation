import {
  makeStyles,
  Label,
  Button,
  makeStyles,
  Input,
  Select,
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogBody,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@fluentui/react-components";

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
  appMainSection: {
    backgroundColor: "white",
    padding: "1rem",
    // Example media query for small screens
    "@media (max-width: 600px)": {
      padding: "0.5rem",
    },
  },
  formContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  searchTask: {
    width: "45%",
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
  succesImage: {
    objectFit: "cover",
    width: "10rem",
  },

  successDialogCentered: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // gap: "1rem",
  },

  p: {
    margin: "0px",
    padding: "0px",
  },

  // Modal Classes
  dateRow: {
    composes: "$row",
    margin: 0,
    padding: 0,
  },

  filtersRow: {
    composes: "$row",
    marginTop: "10px",
  },
});

const TopBar = () => {
  return (
    <div>
      {/* Filter Form */}
      <form className={styles.formContainer}>
        <div className={styles.searchTask}>
          <Input
            id='search'
            placeholder='Search...'
            contentBefore={<Search24Regular />}
            className={styles.seachField}
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
        {/* Dialog Create Task */}
      </form>
    </div>
  );
};

export default TopBar;
