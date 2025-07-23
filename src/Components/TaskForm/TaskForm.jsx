import { useState } from "react";
import { Label, Input, Select, Button } from "@fluentui/react-components";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
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
});

const TaskForm = ({ onSubmit, id }) => {
  const styles = useStyles();
  // Form state
  const [taskName, setTaskName] = useState("");
  const [dateInitiated, setDateInitiated] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [priority, setPriority] = useState("");
  const [assignStatus, setAssignStatus] = useState("");
  const [actionItems, setActionItems] = useState("");
  const [materials, setMaterials] = useState([
    { materialName: "", quantity: "", unit: "" },
  ]);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      taskName,
      dateInitiated,
      dueDate,
      assignedTo,
      priority,
      assignStatus,
      actionItems,
      materials,
      description,
    };
    if (onSubmit) onSubmit(form);
    // Optionally reset form here
  };

  const handleMaterialChange = (index, field, value) => {
    setMaterials((prev) =>
      prev.map((material, i) =>
        i === index ? { ...material, [field]: value } : material
      )
    );
  };

  return (
    <form onSubmit={handleSubmit} id={id}>
      <Input
        required
        appearance='underline'
        className={styles.full}
        placeholder='Task Name'
        style={{ marginBottom: "12px" }}
        value={taskName}
        maxLength={20}
        onChange={(e) => setTaskName(e.target.value)}
      />
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
            <option value=''>Select</option>
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
            <option value=''>Select</option>
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
            <option value=''>Select</option>
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
      <p>Materials List</p>
      {materials.map((material, index) => (
        <div className={styles.row} key={index}>
          <div className={`${styles.third} ${styles.field}`}>
            <Label>Material Name</Label>
            <Input
              type='text'
              value={material.materialName}
              onChange={(e) =>
                handleMaterialChange(index, "materialName", e.target.value)
              }
            />
          </div>
          <div className={`${styles.third} ${styles.field}`}>
            <Label>Quantity</Label>
            <Input
              type='number'
              value={material.quantity}
              onChange={(e) =>
                handleMaterialChange(index, "quantity", e.target.value)
              }
            />
          </div>
          <div className={`${styles.third} ${styles.field}`}>
            <Label>Unit</Label>
            <Input
              type='number'
              value={material.unit}
              onChange={(e) =>
                handleMaterialChange(index, "unit", e.target.value)
              }
            />
          </div>
        </div>
      ))}

      <div style={{ textAlign: "right", marginBottom: 12 }}>
        <Button
          appearance='subtle'
          style={{ color: "blue" }}
          type='button'
          onClick={() =>
            setMaterials([
              ...materials,
              { materialName: "", quantity: "", unit: "" },
            ])
          }
        >
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
          maxLength={50}
          className={styles.full}
        />
      </div>
    </form>
  );
};

export default TaskForm;
