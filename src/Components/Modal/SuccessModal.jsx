import Modal from "./Modal";
import { Button } from "@fluentui/react-components";
import succesImage from "../../assets/images/success.png";

const SuccessModal = ({ open, onOpenChange }) => {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title={null}
      modalType='non-modal'
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{ objectFit: "cover", width: "10rem" }}
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
