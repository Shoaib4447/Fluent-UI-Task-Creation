import Modal from "./Modal";
import { Button, makeStyles } from "@fluentui/react-components";
import succesImage from "../../assets/images/success.png";
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
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title={null}
      modalType='non-modal'
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
