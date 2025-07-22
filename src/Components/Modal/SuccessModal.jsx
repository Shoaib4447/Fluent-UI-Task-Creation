import React from "react";

const SuccessModal = () => {
  return (
    <div>
      {/* Success Dialog */}
      <Dialog
        open={successOpen}
        onOpenChange={(_, data) => setSuccessOpen(data.open)}
      >
        <DialogSurface>
          <DialogBody>
            {/* <DialogTitle></DialogTitle> */}
            <DialogContent className={styles.successDialogCentered}>
              <img
                className={styles.succesImage}
                src={succesImage}
                alt='Success Png'
              />
              <h3>Task Created Successfully</h3>
              <p>You have just added your task.</p>
            </DialogContent>
            <DialogActions>
              <Button
                appearance='primary'
                onClick={() => setSuccessOpen(false)}
              >
                Close
              </Button>
            </DialogActions>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </div>
  );
};

export default SuccessModal;
