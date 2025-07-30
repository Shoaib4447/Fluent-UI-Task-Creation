// Imports
import { makeStyles, Button } from "@fluentui/react-components";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllTasksFromDB,
  addTask,
  updateTask,
} from "../features/tasks/taskSlice";
import {
  openCreateTaskDialog,
  closeCreateTaskDialog,
  openSuccessDialog,
  closeSuccessDialog,
  closeViewTaskModal,
  openEditTaskModal,
  closeEditTaskModal,
  setEditTask,
} from "../features/ui/uiSlice";
import TaskService from "../api/taskService.js";
import { useEffect } from "react";
import TopBar from "../Components/TopBar/TopBar";
import Modal from "../Components/Modal/Modal";
import TaskForm from "../Components/TaskForm/TaskForm";
import SuccessModal from "../Components/Modal/SuccessModal";
// import CreateTaskModal from "../Components/Modal/CreateTaskModal.jsx";
import TasksList from "../Components/TasksList/TasksList.jsx";
import TaskCount from "../Components/TaskCount/TaskCount";
// Styles
const useStyles = makeStyles({
  // Custom Classes
  appMainSection: {
    backgroundColor: "white",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    // Example media query for small screens
    "@media (max-width: 600px)": {
      padding: "0.5rem",
    },
  },
});

const Dashboard = () => {
  const dispatch = useDispatch();
  const styles = useStyles();

  // Tasks Redux state
  const tasks = useSelector((state) => state.tasks.tasks);

  // Handling API using Axios
  const getAllTasksData = async () => {
    try {
      // GET Req
      const res = await TaskService.getAllTasks();
      const allTasksFromDB = res.data.tasks;
      // console.log(allTasksFromDB);

      dispatch(getAllTasksFromDB(allTasksFromDB));
    } catch (error) {
      console.log(error);
      console.log(error.message.status);
    }
  };

  const createNewTaskInDB = async (form) => {
    try {
      // POST Req
      const res = await TaskService.createTask(form);
      return res.data;
    } catch (error) {
      console.log(error.message);
      console.log("error", error);
    }
  };

  // PUT Req
  const updateTaskInDB = async (id, updatedTask) => {
    try {
      // PUT Req
      console.log("Updated Task Object to be saved in DB=>:", updatedTask);
      const res = await TaskService.updateTask(id, updatedTask);
      console.log("res.data => ", res.data);
      return res.data;
    } catch (error) {
      console.log(error.message);
      console.log("error", error);
    }
  };

  // Modal Redux State
  const isCreateTaskDialogOpen = useSelector(
    (state) => state.ui.openCreateTaskDialog
  );
  const isSuccessDialogOpen = useSelector(
    (state) => state.ui.openSuccessDialog
  );

  // View Task Modal State
  const viewTask = useSelector((state) => state.ui.viewTask);
  const isViewTaskModalOpen = useSelector(
    (state) => state.ui.isViewTaskModalOpen
  );

  // Edit Task Modal State
  const editTask = useSelector((state) => state.ui.editTask);
  const isEditTaskModalOpen = useSelector(
    (state) => state.ui.isEditTaskModalOpen
  );

  // Handle form submit
  const handleTaskCreate = async (form) => {
    // now to create task in db and redux store at same time and synced
    try {
      console.log("Object to be stored in DB:", form); // object being saved in db
      const res = await createNewTaskInDB(form);
      if (!res) return; // prevent dispatch if API failed to create task
      dispatch(addTask(res.data)); //at first pasing only (form) to store
      dispatch(closeCreateTaskDialog());
      dispatch(openSuccessDialog());
    } catch (error) {
      console.error("Task creation failed:", error);
    }
  };

  // handle Edit Task
  const handleEditTask = async (updatedTask) => {
    console.log("Updated Object to be stored in DB:", updatedTask); // object being saved in db
    console.log("updatedTask._id is =>", updatedTask._id);
    const res = await updateTaskInDB(updatedTask._id, updatedTask);
    if (!res) return;
    dispatch(updateTask(updatedTask));
    dispatch(closeEditTaskModal());
  };

  useEffect(() => {
    getAllTasksData();
  }, []);

  console.log("Edit task =>", editTask);

  return (
    <>
      <section className={styles.appMainSection}>
        <TopBar onCreateClick={() => dispatch(openCreateTaskDialog())} />
        <TaskCount />

        {/* Create Task Modal */}
        {/* <CreateTaskModal onSubmit={handleTaskCreate} /> */}
        <Modal
          open={isCreateTaskDialogOpen}
          onOpenChange={(_, data) => {
            if (data.open) {
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
              >
                Cancel
              </Button>
              <Button
                type='submit'
                form='task-create-form'
                appearance='primary'
              >
                Save
              </Button>
            </>
          }
        >
          <TaskForm onSubmit={handleTaskCreate} id='task-create-form' />
        </Modal>

        {/* Success Modal Task Created */}
        <SuccessModal
          open={isSuccessDialogOpen}
          onOpenChange={() => dispatch(closeSuccessDialog())}
        />

        {/* Edit Modal */}
        <Modal
          title='Edit Task'
          open={isEditTaskModalOpen}
          onOpenChange={() => {
            dispatch(closeEditTaskModal());
            dispatch(setEditTask({}));
          }}
          actions={
            <>
              <Button
                type='button'
                onClick={() => dispatch(closeEditTaskModal())}
                appearance='secondary'
              >
                Cancel
              </Button>
              <Button type='submit' form='task-edit-form' appearance='primary'>
                Save
              </Button>
            </>
          }
        >
          {editTask && (
            <TaskForm
              id='task-edit-form'
              initialData={editTask}
              onSubmit={handleEditTask}
            />
          )}
        </Modal>

        {/* View Task Modal */}
        <Modal
          open={isViewTaskModalOpen}
          onOpenChange={() => dispatch(closeViewTaskModal())}
          title='View Task'
          actions={
            <Button onClick={() => dispatch(closeViewTaskModal())}>
              Close
            </Button>
          }
        >
          {viewTask && (
            <TaskForm
              id='view-task-form'
              initialData={viewTask}
              disabled={true}
              display={"none"}
            />
          )}
        </Modal>

        {/* Tasks Section: All created task will be shown here */}
        <TasksList tasks={tasks} />
      </section>
    </>
  );
};

export default Dashboard;
