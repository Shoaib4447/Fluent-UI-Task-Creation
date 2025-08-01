import {
  getAllTasksFromDB,
  setTasksLoading,
} from "../features/tasks/taskSlice.js";
import TaskService from "./taskService.js";
import { setTaskSubmitting } from "../features/tasks/taskSlice.js";
// Handling API using Axios
// GET
export const getAllTasksData = async (dispatch, tasksLoaded) => {
  try {
    // GET Req
    dispatch(setTasksLoading(true));
    const res = await TaskService.getAllTasks();
    const allTasksFromDB = res.data.tasks;
    const formattedTasks = allTasksFromDB.map((task) => ({
      ...task,
    }));

    dispatch(getAllTasksFromDB(formattedTasks));
  } catch (error) {
    console.log(error);
    console.log(error.message.status);
    dispatch(setTasksLoading(false));
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
