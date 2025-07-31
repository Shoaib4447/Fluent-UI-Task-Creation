// Imports
import { makeStyles, Button } from "@fluentui/react-components";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, updateTask } from "../features/tasks/taskSlice";
import {
  // create moved to topbar
  getAllTasksData,
  updateTaskInDB,
  deleteTaskInDB,
} from "../api/apiCalls.js";
import {
  openCreateTaskDialog,
  openSuccessDialog,
  closeSuccessDialog,
  closeViewTaskModal,
  openEditTaskModal,
  closeEditTaskModal,
  setEditTask,
  openDeleteTaskModal,
  closeDeleteTaskModal,
} from "../features/ui/uiSlice";
import { useEffect } from "react";
import TopBar from "../Components/TopBar/TopBar";
import Modal from "../Components/Modal/Modal";
import TaskForm from "../Components/TaskForm/TaskForm";
import SuccessModal from "../Components/Modal/SuccessModal";
import DeleteModal from "../Components/Modal/DeleteModal.jsx";
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

  // Modal Redux State

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

  // Delete Task Modal State
  const isDeleteTaskModalOpen = useSelector(
    (state) => state.ui.isDeleteTaskModalOpen
  );

  // handle Edit Task
  const handleEditTask = async (updatedTask) => {
    const res = await updateTaskInDB(updatedTask._id, updatedTask);
    if (!res) return;
    dispatch(updateTask(updatedTask));
    dispatch(closeEditTaskModal());
  };

  useEffect(() => {
    getAllTasksData(dispatch);
  }, []);

  return (
    <>
      <section className={styles.appMainSection}>
        <TopBar onCreateClick={() => dispatch(openCreateTaskDialog())} />
        <TaskCount />
        {/* Create Task Modal moved to Top Bar*/}
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
        {/* DELETE Modal */}
        <DeleteModal
          open={isDeleteTaskModalOpen}
          onOpenChange={() => dispatch(closeDeleteTaskModal())}
        />
        {/* Tasks Section: All created task will be shown here */}
        <TasksList tasks={tasks} />
      </section>
    </>
  );
};

export default Dashboard;
