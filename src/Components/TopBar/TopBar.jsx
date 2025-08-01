import { makeStyles, Input, Select, Button } from "@fluentui/react-components";
import { Search24Regular } from "@fluentui/react-icons";
import {
  openCreateTaskDialog,
  closeCreateTaskDialog,
  openSuccessDialog,
} from "../../features/ui/uiSlice";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../Modal/Modal";
import TaskForm from "../TaskForm/TaskForm";
import { createNewTaskInDB } from "../../api/apiCalls";
import {
  addTask,
  setSearchByTitle,
  setSearchByStatus,
} from "../../features/tasks/taskSlice";
import { ClipLoader } from "react-spinners";
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
  const dispatch = useDispatch();
  const isCreateTaskDialogOpen = useSelector(
    (state) => state.ui.openCreateTaskDialog
  );
  // Search by Title
  const searchByTitle = useSelector((state) => state.tasks.searchTitle);
  // Search by Status
  const searchByStatus = useSelector((state) => state.tasks.searchByStatus);

  // Disable Buttons While req sent
  const isTaskSubmitting = useSelector((state) => state.tasks.isTaskSubmitting);
  // Handle form submit
  const handleTaskCreate = async (form) => {
    // now to create task in db and redux store at same time and synced
    try {
      const res = await createNewTaskInDB(form, dispatch);
      if (!res) return; // prevent dispatch if API failed to create task
      dispatch(addTask(res.data)); //at first pasing only (form) to store
      dispatch(closeCreateTaskDialog());
      dispatch(openSuccessDialog());
    } catch (error) {
      console.error("Task creation failed:", error);
    }
  };
  return (
    <div>
      {/* Filter Form */}
      <form className={styles.formContainer}>
        <div className={styles.half}>
          <Input
            id='search'
            placeholder='Search by title...'
            contentBefore={<Search24Regular />}
            className={styles.full}
            value={searchByTitle}
            onChange={(e) => dispatch(setSearchByTitle(e.target.value))}
          />
        </div>
        <div className={styles.toDo}>
          <Select
            placeholder='Select Status'
            value={searchByStatus}
            onChange={(e) => dispatch(setSearchByStatus(e.target.value))}
          >
            <option value=''>Select Status</option>
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
      </form>

      {/* Task Create Modal */}
      <Modal
        open={isCreateTaskDialogOpen}
        onOpenChange={(_, data) => {
          if (data?.open) {
            dispatch(openCreateTaskDialog()); // open the dialog
          } else {
            dispatch(closeCreateTaskDialog()); // close the dialog
          }
        }}
        title='Create New Task'
        actions={
          <>
            <Button
              type='button'
              onClick={() => dispatch(closeCreateTaskDialog())}
              appearance='secondary'
              disabled={isTaskSubmitting}
            >
              Cancel
            </Button>
            <Button
              disabled={isTaskSubmitting}
              type='submit'
              form='task-create-form'
              appearance='primary'
            >
              {isTaskSubmitting ? (
                <ClipLoader color='#3B82F6' size={15} />
              ) : (
                "Save"
              )}
            </Button>
          </>
        }
      >
        <TaskForm onSubmit={handleTaskCreate} id='task-create-form' />
      </Modal>
    </div>
  );
};

export default TopBar;
