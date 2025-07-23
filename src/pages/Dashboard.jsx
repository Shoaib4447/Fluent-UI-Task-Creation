// Imports
import { makeStyles, Button } from "@fluentui/react-components";
// import { useState } from "react";
import {useSelector ,useDispatch} from 'react-redux';
import {addTask} from '../features/tasks/taskSlice';
import {openCreateTaskDialog,closeCreateTaskDialog,openSuccessDialog,closeSuccessDialog} from '../features/ui/uiSlice';

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
  // Create Task Dialog state
  // const [openCreateTaskDialog, setOpenCreateTaskDialog] = useState(false);
  // const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  // const [tasks, setTasks] = useState([]);

  // Tasks Redux state
  const tasks = useSelector((state)=>state.tasks.tasks)

  // Modal Redux State
  const isCreateTaskDialogOpen = useSelector((state)=>state.ui.openCreateTaskDialog)
  const isSuccessDialogOpen = useSelector((state)=>state.ui.openSuccessDialog)
  
  // const addTask = (task) => {
  //   setTasks((prev) => [...prev, task]);
  // };



  // Handle form submit
  const handleTaskCreate = (form) => {
    // handle task creation logic
    dispatch(addTask(form));
    dispatch(closeCreateTaskDialog());
    dispatch(openSuccessDialog());
  };
  return (
    <>
      <section className={styles.appMainSection}>
        <TopBar onCreateClick={() => dispatch(openCreateTaskDialog())} />
        <TaskCount />
        {/* Create Task Modal */}
        <Modal
          open={isCreateTaskDialogOpen}
          onOpenChange={(_,data)=>
           {
            if(data.open){
              dispatch(openCreateTaskDialog()) // open the dialog
            }
            else{
              dispatch(closeCreateTaskDialog()) // close the dialog
            }
           }
          }
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
        <SuccessModal
            open={isSuccessDialogOpen}
          onOpenChange={()=>dispatch(closeSuccessDialog())}
        />

        {/* View Task Modal */}
        <Modal
          open={isViewTaskModalOpen}
          onOpenChange={()=>dispatch(closeViewTaskModal())}
          title="View Task"
          actions={
            <Button onClick={()=>dispatch(closeViewTaskModal())}>
              Close
            </Button>
          }
        >
          {viewTask && (
            <TaskForm id="view-task-form" initialData={viewTask} disabled={true}/>
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
