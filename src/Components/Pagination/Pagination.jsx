import { Button, makeStyles } from "@fluentui/react-components";
import { useSelector, useDispatch } from "react-redux";
import { getAllTasksData } from "../../api/apiCalls";
import { setCurrentPage } from "../../features/tasks/taskSlice";
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

  const currentPage = useSelector((state) => state.tasks.currentPage);
  const totalPage = useSelector((state) => state.tasks.totalPage);

  console.log("currentPage", currentPage);
  console.log("totalPage", totalPage);
  const handlePrev = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      dispatch(setCurrentPage(newPage));
      getAllTasksData(dispatch, newPage);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPage) {
      const newPage = currentPage + 1;
      dispatch(setCurrentPage(newPage));
      getAllTasksData(dispatch, newPage);
    }
  };

  return (
    <div className={styles.PaginationDiv}>
      <div className={styles.pageBtn}>
        <Button type='button' onClick={handlePrev} disabled={currentPage === 1}>
          Previous Page
        </Button>
        <span>{`Page ${currentPage} of ${totalPage}`}</span>
        <Button
          type='button'
          onClick={handleNext}
          disabled={currentPage === totalPage}
        >
          Next Page
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
