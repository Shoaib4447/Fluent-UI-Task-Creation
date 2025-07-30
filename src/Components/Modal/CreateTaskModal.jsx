import { useDispatch, useSelector } from "react-redux";
import { Button } from "@fluentui/react-components";

import Modal from "../Modal/Modal";
import TaskForm from "../TaskForm/TaskForm";

import {
  openCreateTaskDialog,
  closeCreateTaskDialog,
} from "../../features/ui/uiSlice";

const CreateTaskModal = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const isCreateTaskDialogOpen = useSelector(
    (state) => state.ui.isCreateTaskDialogOpen
  );

  return (
    <Modal
      open={isCreateTaskDialogOpen}
      onOpenChange={(_, data) => {
        if (data.open) {
          dispatch(openCreateTaskDialog());
        } else {
          dispatch(closeCreateTaskDialog());
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
          <Button type='submit' form='task-create-form' appearance='primary'>
            Save
          </Button>
        </>
      }
    >
      <TaskForm onSubmit={onSubmit} id='task-create-form' />
    </Modal>
  );
};

export default CreateTaskModal;
