// Imports
import { makeStyles ,Button} from "@fluentui/react-components";
import { useState } from "react";

import TopBar from "./Components/TopBar/TopBar";
import Modal from "./Components/Modal/Modal";
import TaskForm from "./Components/TaskForm/TaskForm";
import SuccessModal from "./Components/Modal/SuccessModal";
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

function App() {
  const styles = useStyles();
  // Create Task Dialog state
  const [openCreateTaskDialog, setOpenCreateTaskDialog] = useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

  // Handle form submit
  const handleTaskCreate = (form) => {
    // handle task creation logic
    console.log(`Task Created: ${JSON.stringify(form, null, 2)}`);
    setOpenCreateTaskDialog(false);
    setOpenSuccessDialog(true);
  };

  return (
    <>
      <section className={styles.appMainSection}>
        <TopBar onCreateClick={() => setOpenCreateTaskDialog(true)} />
        <Modal
        open={openCreateTaskDialog}
        onOpenChange={setOpenCreateTaskDialog}
        title="Create New Task"
        actions={
          <>
            <Button type="button" onClick={() => setOpenCreateTaskDialog(false)} appearance="secondary">
              Cancel
            </Button>
            <Button type="submit" form="task-create-form" appearance="primary">
              Save
            </Button>
          </>
        }
      >
        <TaskForm
          onSubmit={handleTaskCreate}
          id="task-create-form"
          />
      </Modal>
      <SuccessModal
        open={openSuccessDialog}
        onOpenChange={setOpenSuccessDialog}
      />
      {/* Tasks Section: All created task will be shown here */}
      </section>
    </>
  );
}

export default App;
