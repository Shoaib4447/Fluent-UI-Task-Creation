import { makeStyles, Button } from "@fluentui/react-components";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeDeleteTaskModal } from "../../features/ui/uiSlice";
import { deleteTaskFromRTK } from "../../features/tasks/taskSlice";
import deleteModalImg from "../../assets/images/deleteModalImg.png";
import { deleteTaskInDB } from "../../api/apiCalls";

const useStyles = makeStyles({
  DeleteModal: {
    fontSize: "15rem",
  },
  SucessDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  SuccessImg: { objectFit: "cover", width: "10rem" },
  dangerBtn: {
    backgroundColor: "#c50f1f",
    color: "#ffffff",
  },
});
const DeleteModal = ({ open, onOpenChange }) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  //   Access task selected to be deleted in RTK
  const deleteTask = useSelector((state) => state.ui.deleteTask);

  // Handle Delete Task
  const handleDeleteTask = async () => {
    try {
      const taskId = deleteTask._id;
      const res = await deleteTaskInDB(taskId);
      if (!res) return;
      dispatch(deleteTaskFromRTK(taskId));
      dispatch(closeDeleteTaskModal());
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title={null}
      modalType='non-modal'
      actions={
        <>
          <Button
            type='button'
            onClick={() => dispatch(closeDeleteTaskModal())}
            appearance='secondary'
          >
            Cancel
          </Button>
          <Button
            type='button'
            className={styles.dangerBtn}
            onClick={handleDeleteTask}
          >
            Yes Delete this Task
          </Button>
        </>
      }
    >
      <div className={styles.SucessDiv}>
        <img
          className={styles.SuccessImg}
          src={deleteModalImg}
          alt='Delete Png'
        />
        <h3>Are you sure ?</h3>
        <p>You want to delete this task.</p>
      </div>
    </Modal>
  );
};

export default DeleteModal;
