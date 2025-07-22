import {
  makeStyles,
  Label,
  Button,
  makeStyles,
  Input,
  Select,
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogBody,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@fluentui/react-components";

// Styles
const useStyles = makeStyles({
  // Layout utilities
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    gap: "16px",
    boxSizing: "border-box",
  },
  half: {
    flex: "1 1 0",
    minWidth: "0",
    maxWidth: "50%",
    boxSizing: "border-box",
    "@media (max-width: 600px)": {
      maxWidth: "100%",
      flex: "1 1 100%",
    },
  },
  third: {
    flex: "1 1 0",
    minWidth: "0",
    maxWidth: "33.33%",
    boxSizing: "border-box",
    "@media (max-width: 900px)": {
      maxWidth: "100%",
      flex: "1 1 100%",
    },
  },
  full: {
    width: "100%",
    boxSizing: "border-box",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    marginBottom: "12px",
  },
  // Custom Classes
  appMainSection: {
    backgroundColor: "white",
    padding: "1rem",
    // Example media query for small screens
    "@media (max-width: 600px)": {
      padding: "0.5rem",
    },
  },
  formContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  searchTask: {
    width: "45%",
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  seachField: {
    width: "100%",
  },
  toDo: {
    width: "20%",
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  assingedTo: {
    width: "20%",
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  button: {
    width: "10%",
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  succesImage: {
    objectFit: "cover",
    width: "10rem",
  },

  successDialogCentered: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // gap: "1rem",
  },

  p: {
    margin: "0px",
    padding: "0px",
  },

  // Modal Classes
  dateRow: {
    composes: "$row",
    margin: 0,
    padding: 0,
  },

  filtersRow: {
    composes: "$row",
    marginTop: "10px",
  },
});

const Modal = () => {
  // Modal Form states
  const [dateInitiated, setDateInitiated] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [priority, setPriority] = useState("");
  const [assignStatus, setAssignStatus] = useState("");
  const [actionItems, setActionItems] = useState("");
  const [materialName, setMaterialName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [description, setDescription] = useState("");

  // onSubmit Form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Use form object here
    const form = {
      dateInitiated,
      dueDate,
      assignedTo,
      priority,
      assignStatus,
      actionItems,
      materialName,
      quantity,
      unit,
      description,
    };
    console.log(form);
    setOpenCreateTaskDialog(false);
    setSuccessOpen(true);

    setDateInitiated("");
    setDueDate("");
    setAssignedTo("");
    setPriority("");
    setAssignStatus("");
    setActionItems("");
    setMaterialName("");
    setQuantity("");
    setUnit("");
    setDescription("");
  };
  return (
    <div>
      <Dialog
        open={openCreateTaskDialog}
        onOpenChange={(_, data) => setOpenCreateTaskDialog(data.open)}
      >
        <DialogTrigger>
          <Button appearance='primary' className={styles.button} type='button'>
            Create
          </Button>
        </DialogTrigger>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>Create New Task</DialogTitle>
            <DialogContent className={styles.content}>
              <form onSubmit={handleSubmit}>
                {/* Date Row */}
                <div className={styles.row}>
                  <div className={`${styles.half} ${styles.field}`}>
                    <Label>Date Initiated</Label>
                    <Input
                      type='date'
                      value={dateInitiated}
                      onChange={(e) => setDateInitiated(e.target.value)}
                    />
                  </div>
                  <div className={`${styles.half} ${styles.field}`}>
                    <Label>Due Date</Label>
                    <Input
                      type='date'
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                    />
                  </div>
                </div>
                {/* Assignment Row */}
                <div className={styles.row}>
                  <div className={`${styles.third} ${styles.field}`}>
                    <Label>Assigned to</Label>
                    <Select
                      value={assignedTo}
                      onChange={(e) => setAssignedTo(e.target.value)}
                    >
                      <option>Charlotte Waltson</option>
                      <option>Ali</option>
                      <option>Fatima</option>
                    </Select>
                  </div>
                  <div className={`${styles.third} ${styles.field}`}>
                    <Label>Priority</Label>
                    <Select
                      value={priority}
                      onChange={(e) => setPriority(e.target.value)}
                    >
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </Select>
                  </div>
                  <div className={`${styles.third} ${styles.field}`}>
                    <Label>Assign Status</Label>
                    <Select
                      value={assignStatus}
                      onChange={(e) => setAssignStatus(e.target.value)}
                    >
                      <option>To Do</option>
                      <option>In Progress</option>
                      <option>Done</option>
                    </Select>
                  </div>
                </div>
                {/* Action Items */}
                <div className={styles.full}>
                  <Label>Action Items</Label>
                  <textarea
                    value={actionItems}
                    onChange={(e) => setActionItems(e.target.value)}
                    rows={3}
                    className={styles.full}
                  />
                </div>
                {/* Material List */}
                <div className={styles.row}>
                  <div className={`${styles.third} ${styles.field}`}>
                    <Label>Material Name</Label>
                    <Input
                      value={materialName}
                      onChange={(e) => setMaterialName(e.target.value)}
                    />
                  </div>
                  <div className={`${styles.third} ${styles.field}`}>
                    <Label>Quantity</Label>
                    <Input
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                  <div className={`${styles.third} ${styles.field}`}>
                    <Label>Unit</Label>
                    <Input
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                    />
                  </div>
                </div>
                <div style={{ textAlign: "right", marginBottom: 12 }}>
                  <Button appearance='subtle' style={{ color: "blue" }}>
                    Add More Material
                  </Button>
                </div>
                {/* Description */}
                <div className={styles.full}>
                  <Label>Description</Label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={5}
                    className={styles.full}
                  />
                </div>
                {/* Actions */}
                <div
                  className={styles.row}
                  style={{ justifyContent: "flex-end", gap: "8px" }}
                >
                  <DialogActions>
                    <DialogTrigger>
                      <Button appearance='secondary'>Close</Button>
                    </DialogTrigger>
                  </DialogActions>
                  <Button
                    appearance='primary'
                    type='submit'
                    onSubmit={() => setOpenCreateTaskDialog(false)}
                  >
                    Save
                  </Button>
                </div>
              </form>
            </DialogContent>
          </DialogBody>
        </DialogSurface>
      </Dialog>
    </div>
  );
};

export default Modal;
