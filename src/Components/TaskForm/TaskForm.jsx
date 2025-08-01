import { useState, useEffect } from "react";
import {
  Label,
  Input,
  Select,
  Textarea,
  Button,
} from "@fluentui/react-components";
import { makeStyles } from "@fluentui/react-components";
import moment from "moment";
import { useSelector } from "react-redux";
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

const TaskForm = ({
  onSubmit,
  id,
  initialData = {},
  disabled = false,
  display,
}) => {
  const styles = useStyles();
  // Form state
  const [taskName, setTaskName] = useState("");
  const [dateInitiated, setDateInitiated] = useState();
  const [dueDate, setDueDate] = useState();
  const [assignedTo, setAssignedTo] = useState("");
  const [priority, setPriority] = useState("");
  const [assignStatus, setAssignStatus] = useState("");
  const [actionItems, setActionItems] = useState("");
  const [materials, setMaterials] = useState([
    { materialName: "", materialQuantity: "", materialUnit: "" },
  ]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (initialData) {
      setTaskName(initialData.taskName || "");
      setDateInitiated(initialData.dateInitiated || "");
      setDueDate(initialData.dueDate || "");
      setAssignedTo(initialData.assignedTo || "");
      setPriority(initialData.priority || "");
      setAssignStatus(initialData.assignStatus || "");
      setActionItems(initialData.actionItems || "");
      setMaterials(
        initialData.materials || [
          { materialName: "", materialQuantity: "", materialUnit: "" },
        ]
      );
      setDescription(initialData.description || "");
    }
  }, [
    initialData.taskName,
    initialData.dateInitiated,
    initialData.dueDate,
    initialData.assignedTo,
    initialData.actionItems,
    initialData.materials,
    initialData.description,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = {
      _id: initialData?._id,
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
        disabled={disabled}
      />
      {/* Date Row */}
      <div className={styles.row}>
        <div className={`${styles.half} ${styles.field}`}>
          <Label>Date Initiated</Label>
          <Input
            type='date'
            value={moment(dateInitiated).format("YYYY-MM-DD")}
            onChange={(e) => setDateInitiated(e.target.value)}
            disabled={disabled}
          />
        </div>
        <div className={`${styles.half} ${styles.field}`}>
          <Label>Due Date</Label>
          <Input
            type='date'
            value={moment(dueDate).format("YYYY-MM-DD")}
            onChange={(e) => setDueDate(e.target.value)}
            disabled={disabled}
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
            disabled={disabled}
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
            disabled={disabled}
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
            disabled={disabled}
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
        <Textarea
          value={actionItems}
          onChange={(e) => setActionItems(e.target.value)}
          rows={3}
          className={styles.full}
          disabled={disabled}
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
              disabled={disabled}
            />
          </div>
          <div className={`${styles.third} ${styles.field}`}>
            <Label>Quantity</Label>
            <Input
              type='number'
              value={material.materialQuantity}
              onChange={(e) =>
                handleMaterialChange(
                  index,
                  "materialQuantity",
                  Number(e.target.value)
                )
              }
              disabled={disabled}
            />
          </div>
          <div className={`${styles.third} ${styles.field}`}>
            <Label>Unit</Label>
            <Input
              type='number'
              value={material.materialUnit}
              onChange={(e) =>
                handleMaterialChange(index, "materialUnit", e.target.value)
              }
              disabled={disabled}
            />
          </div>
        </div>
      ))}
      {/* Add material Button */}
      <div style={{ textAlign: "right", marginBottom: 12 }}>
        <Button
          appearance='subtle'
          style={{ color: "blue", display: display }}
          type='button'
          onClick={() =>
            setMaterials([
              ...materials,
              { materialName: "", materialQuantity: "", materialUnit: "" },
            ])
          }
          disabled={disabled}
        >
          Add More Material
        </Button>
      </div>
      {/* Description */}
      <div className={styles.full}>
        <Label>Description</Label>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          maxLength={50}
          className={styles.full}
          disabled={disabled}
        />
      </div>
    </form>
  );
};

export default TaskForm;
