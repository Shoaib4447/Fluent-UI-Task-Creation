import { Button, makeStyles } from "@fluentui/react-components";
import { useSelector, useDispatch } from "react-redux";
import { getAllTasksData } from "../../api/apiCalls";
import { setCurrentPage } from "../../features/tasks/taskSlice";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
const useStyles = makeStyles({
  PaginationDiv: {
    display: "flex",
    justifyContent: "center", // centers items horizontally
    alignItems: "center",
    gap: "1rem",

    position: "fixed",
    bottom: "0.5rem", // gives space from bottom edge
    left: 0,
    right: 0,
  },
  pageBtn: {
    maxWidth: "fit-content",
    backgroundColor: "#2689e1ff",
    padding: "0.5rem",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
});
const Pagination = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  // Local State to disable pagination button
  // const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const isTasksBeingLoaded = useSelector(
    (state) => state.tasks.isTasksBeingLoaded
  );

  const currentPage = useSelector((state) => state.tasks.currentPage);
  const totalPage = useSelector((state) => state.tasks.totalPage);

  const handlePrev = () => {
    if (currentPage > 1) {
      //&& !isButtonDisabled
      // setIsButtonDisabled(true);
      const newPage = currentPage - 1;
      dispatch(setCurrentPage(newPage));
      getAllTasksData(dispatch, newPage);
      // setTimeout(() => setIsButtonDisabled(false), 1000);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPage) {
      // && !isButtonDisabled
      // setIsButtonDisabled(true);
      const newPage = currentPage + 1;
      dispatch(setCurrentPage(newPage));
      getAllTasksData(dispatch, newPage);
      // setTimeout(() => setIsButtonDisabled(false), 1000);
    }
  };

  return (
    <div className={styles.PaginationDiv}>
      <div className={styles.pageBtn}>
        <Button type='button' onClick={handlePrev} disabled={currentPage === 1}>
          {isTasksBeingLoaded ? <ClipLoader size={15} /> : "Previous"}
        </Button>
        <span>{`Page ${currentPage} of ${totalPage}`}</span>
        <Button
          type='button'
          onClick={handleNext}
          disabled={currentPage === totalPage}
        >
          {isTasksBeingLoaded ? <ClipLoader size={15} /> : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
