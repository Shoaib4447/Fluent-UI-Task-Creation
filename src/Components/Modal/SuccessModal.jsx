import Modal from "./Modal";
import { Button, makeStyles } from "@fluentui/react-components";
import succesImage from "../../assets/images/success.png";
import { closeSuccessDialog } from "../../features/ui/uiSlice";
import { useSelector, useDispatch } from "react-redux";
const useStyles = makeStyles({
  SucessDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  SuccessImg: { objectFit: "cover", width: "10rem" },
});
const SuccessModal = ({ open, onOpenChange }) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title={null}
      actions={
        <>
          <Button
            type='button'
            onClick={() => dispatch(closeSuccessDialog())}
            appearance='secondary'
          >
            Close
          </Button>
        </>
      }
    >
      <div className={styles.SucessDiv}>
        <img
          className={styles.SuccessImg}
          src={succesImage}
          alt='Success Png'
        />
        <h3>Task Created Successfully</h3>
        <p>You have just added your task.</p>
      </div>
    </Modal>
  );
};

export default SuccessModal;
