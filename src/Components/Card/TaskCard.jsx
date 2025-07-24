import {
  Card,
  CardFooter,
  Button,
  Body1,
  Caption1,
  Subtitle1,
  makeStyles,
  Avatar,
  Dropdown,
  Option,
} from "@fluentui/react-components";
import { BuildingRegular, BranchRegular } from "@fluentui/react-icons";
import { useState } from "react";
import cardContractIcon from "../../assets/images/cardContractIcon.png";
import cardTitleIcon from "../../assets/images/cardTitleIcon.png";
import { useDispatch } from "react-redux";
import { setViewTask, openViewTaskModal } from "../../features/ui/uiSlice";

const useStyles = makeStyles({
  card: {
    minWidth: "324px",
    minHeight: "245px",
    // overflow: "hidden",
    display: "flex",
    gap: "2px",
    backgroundColor: "#FAFAFA",
    borderRadius: "6px",
    border: "1px solid #D1D1D1",
    paddingTop: "9px",
    paddingLeft: "9px",
    paddingRight: "13px",
    paddingBottom: "10px",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  preview: {
    height: 32,
    width: 32,
    display: "flex",
    alignItems: "center",
    gap: "8px",
    borderRadius: "6px",
  },

  cardContractIcon: {
    width: "20px",
    height: "20px",
    borderRadius: "4px",
    border: "1px solid #0000000D",
  },
  headerRow: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  cardContractTitle: {
    fontFamily: "Segoe UI,sans-serif",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0%",
  },

  contractTitle: {
    display: "flex",
    gap: "8px",
  },
  cardTitleIcon: {
    width: "16px",
    height: "21px",
  },

  taskTitleDiv: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  taskTitle: {
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: "600",
  },
  metaRow: {
    display: "flex",
    gap: "29.5px",
    // justifyContent: "space-between",
    height: "40px",
  },
  metaCol: {
    display: "flex",
    flexDirection: "column",
  },
  assigned: { display: "flex", alignItems: "center", gap: 6 },
  description: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  priority: {
    color: "#2BA763",
    fontWeight: 600,
    fontSize: "10px",
  },

  dateTitle: {
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "0%",
    lineHeight: "16px",
  },
  date: {
    fontSize: "12px",
    fontWeight: "400",
    letterSpacing: "0%",
    lineHeight: "20px",
  },

  descHeading: {
    fontSize: "12px",
    fontWeight: "600",
    lineHeight: "16px",
    letterSpacing: "0%",
  },
  descText: {
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "20px",
    letterSpacing: "0%",
  },
  footer: {
    display: "flex",
    // width: "234px",
  },

  viewButton: {
    width: "81px",
    height: "32px",
    borderRadius: "4px",
    padding: "5px 12px",
  },
  statusButton: {
    width: "120px",
    height: "32px",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "20px",
    letterSpacing: "0%",
  },
  iconColor: {
    color: "orange",
    fontSize: "1.5rem",
  },
});

const TaskCard = ({ task }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [assignStatus, setAssignStatus] = useState(task.assignStatus);
  console.log("task assignStatus=> ", task);
  return (
    <Card className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.cardContent}>
          <div className={styles.headerRow}>
            {/* Project/Company Name */}
            <div className={styles.contractTitle}>
              <span className={styles.preview}>
                <img
                  className={styles.cardContractIcon}
                  src={cardContractIcon}
                  alt='cardContractIcon'
                />
                <h3 className={styles.cardContractTitle}>{task.taskName}</h3>
              </span>
            </div>
            {/* Task Title and Priority */}
            <div className={styles.taskTitleDiv}>
              <img
                className={styles.cardTitleIcon}
                src={cardTitleIcon}
                alt='cardTitleIcon'
              />
              <Subtitle1 className={styles.taskTitle}>
                {task.taskName}
              </Subtitle1>

              <div className={styles.priority}>{task.priority}</div>
            </div>
          </div>
          {/* Dates and Assigned To */}
          <div className={styles.metaRow}>
            <div className={styles.metaCol}>
              <Caption1 className={styles.dateTitle}>Date Initiated</Caption1>
              <Body1 className={styles.date}>{task.dateInitiated}</Body1>
            </div>
            <div className={styles.metaCol}>
              <Caption1 className={styles.dateTitle}>Due Date</Caption1>
              <Body1 className={styles.date}>{task.dueDate}</Body1>
            </div>
            <div className={styles.metaCol}>
              <Caption1 className={styles.dateTitle}>Assigned to</Caption1>
              <div className={styles.assigned}>
                <Avatar name={task.assignedTo} size={24} />
                <Body1 className={styles.date}>{task.assignedTo}</Body1>
              </div>
            </div>
          </div>
          {/* Description */}
          <div className={styles.description}>
            <Caption1 className={styles.descHeading}>Description</Caption1>
            <Body1 className={styles.descText}>{task.description}</Body1>
          </div>
        </div>
        <div className={styles.cardFooter}>
          {/* Footer */}
          <CardFooter className={styles.footer}>
            <Button
              className={styles.viewButton}
              size='medium'
              appearance='primary'
              onClick={() => {
                dispatch(setViewTask(task));
                dispatch(openViewTaskModal());
              }}
            >
              Edit
            </Button>
            <Button
              className={styles.viewButton}
              size='medium'
              onClick={() => {
                dispatch(setViewTask(task));
                dispatch(openViewTaskModal());
              }}
            >
              View
            </Button>
            <Dropdown
              className={styles.statusButton}
              value={assignStatus}
              size='medium'
              style={{ minWidth: "fit-content" }}
              onOptionSelect={(_, data) => setAssignStatus(data.optionValue)}
            >
              <Option value='To Do'>To Do</Option>
              <Option value='In Progress'>In Progress</Option>
              <Option value='Done'>Done</Option>
            </Dropdown>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
