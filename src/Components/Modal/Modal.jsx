import {
  Dialog,
  DialogSurface,
  DialogBody,
  DialogTitle,
  DialogContent,
  DialogActions,
  makeStyles,
  Button,
} from "@fluentui/react-components";
import { DismissRegular } from "@fluentui/react-icons";

// Styles
const useStyles = makeStyles({
  content: {
    padding: "1rem 0",
  },
  closeButton: {
    position: "absolute",
    top: "0rem",
    right: "1rem",
    zIndex: 1,
  },
});

const Modal = ({ open, onOpenChange, title, children, actions }) => {
  const styles = useStyles();
  return (
    <Dialog
      open={open}
      onOpenChange={(_, data) => {
        if (!data.open) {
          onOpenChange(data.open);
        }
      }}
      // modalType='non-modal'
    >
      <DialogSurface>
        <DialogBody style={{ position: "relative" }}>
          <Button
            appearance='subtle'
            aria-label='Close'
            icon={<DismissRegular />}
            onClick={() => onOpenChange(false)}
            className={styles.closeButton}
          />
          {title && <DialogTitle>{title}</DialogTitle>}
          <DialogContent className={styles.content}>{children}</DialogContent>
          {actions && <DialogActions>{actions}</DialogActions>}
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};

export default Modal;
