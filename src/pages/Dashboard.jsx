// Imports
import { makeStyles, Button } from "@fluentui/react-components";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, updateTask } from "../features/tasks/taskSlice";
import {
  openCreateTaskDialog,
  closeCreateTaskDialog,
  openSuccessDialog,
  closeSuccessDialog,
  closeViewTaskModal,
  openEditTaskModal,
  closeEditTaskModal,
} from "../features/ui/uiSlice";

import TopBar from "../Components/TopBar/TopBar";
import Modal from "../Components/Modal/Modal";
import TaskForm from "../Components/TaskForm/TaskForm";
import SuccessModal from "../Components/Modal/SuccessModal";
import TaskCard from "../Components/Card/TaskCard";
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
  const isCreateTaskDialogOpen = useSelector(
    (state) => state.ui.openCreateTaskDialog
  );
  const isSuccessDialogOpen = useSelector(
    (state) => state.ui.openSuccessDialog
  );

  const viewTask = useSelector((state) => state.ui.viewTask);
  // View Task Modal State
  const isViewTaskModalOpen = useSelector(
    (state) => state.ui.isViewTaskModalOpen
  );
  const editTask = useSelector((state) => state.ui.editTask);
  // Edit Task Modal State
  const isEditTaskModalOpen = useSelector(
    (state) => state.ui.isEditTaskModalOpen
  );

  // Handle form submit
  const handleTaskCreate = (form) => {
    // handle task creation logic
    dispatch(addTask(form));
    dispatch(closeCreateTaskDialog());
    dispatch(openSuccessDialog());
  };

  // handle Edit Task
  const handleEditTask = (updatedTask) => {
    dispatch(updateTask(updatedTask));
    dispatch(closeEditTaskModal());
  };

  return (
    <>
      <section className={styles.appMainSection}>
        <TopBar onCreateClick={() => dispatch(openCreateTaskDialog())} />
        <TaskCount />

        {/* Create Task Modal */}
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
          onOpenChange={() => dispatch(closeEditTaskModal())}
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

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {tasks.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
