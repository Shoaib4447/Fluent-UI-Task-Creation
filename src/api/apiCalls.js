import {
  getAllTasksFromDB,
  setTasksLoading,
  setFilteredTaskFromDB,
  setPaginatedTasks,
  setTaskSubmitting,
} from "../features/tasks/taskSlice.js";
import TaskService from "./taskService.js";
// Handling API using Axios
// GET
export const getAllTasksData = async (dispatch, newPage) => {
  try {
    // GET Req
    dispatch(setTasksLoading(true));
    const res = await TaskService.getAllTasks(newPage);
    const allTasksFromDB = res.data;
    const { page, limit, totalPages, totalTasks } = allTasksFromDB;
    const formattedTasks = allTasksFromDB.tasks.map((task) => ({
      ...task,
    }));

    dispatch(getAllTasksFromDB(formattedTasks));
    dispatch(setPaginatedTasks({ page, limit, totalPages, totalTasks }));
  } catch (error) {
    console.log(error);
    console.log(error.message.status);
    dispatch(setTasksLoading(false));
  }
};

// Query from DB
export const searchTaskFromDB = async (title, status, dispatch) => {
  try {
    const res = await TaskService.searchTaskbyTitleAndStatus(title, status);
    const filteredTaskByTitleAndStatus = res.data.tasks;
    dispatch(setFilteredTaskFromDB(filteredTaskByTitleAndStatus));
  } catch (error) {
    console.error("Search API failed", error);
  }
};

// POST Req
export const createNewTaskInDB = async (form, dispatch) => {
  try {
    dispatch(setTaskSubmitting(true)); // Buttons Disabled
    const res = await TaskService.createTask(form);
    dispatch(setTaskSubmitting(false));
    return res.data;
  } catch (error) {
    console.log(error.message);
    console.log("error", error);
  } finally {
    dispatch(setTaskSubmitting(false));
  }
};

// PUT Req (UPDATE)
export const updateTaskInDB = async (id, updatedTask, dispatch) => {
  try {
    dispatch(setTaskSubmitting(true));
    const res = await TaskService.updateTask(id, updatedTask);
    dispatch(setTaskSubmitting(false));
    return res.data;
  } catch (error) {
    console.log(error.message);
    console.log("error", error);
  } finally {
    dispatch(setTaskSubmitting(false));
  }
};

// DELETE
export const deleteTaskInDB = async (id) => {
  try {
    console.log("Task to be deleted=>", id);
    const res = await TaskService.deleteTask(id);
    console.log("DELETE task res.data=>", res.data);
    return res.data;
  } catch (error) {
    console.log(error.message);
    console.log("error", error);
  }
};
