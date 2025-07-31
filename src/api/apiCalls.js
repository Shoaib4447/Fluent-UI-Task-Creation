import { getAllTasksFromDB } from "../features/tasks/taskSlice.js";
import TaskService from "./taskService.js";
import moment from "moment";
// Handling API using Axios
// GET
export const getAllTasksData = async (dispatch) => {
  try {
    // GET Req
    const res = await TaskService.getAllTasks();
    const allTasksFromDB = res.data.tasks;
    const formattedTasks = allTasksFromDB.map((task) => ({
      ...task,
      dueDate: moment(task.dueDate).format("DD MMM YYYY"),
      dateInitiated: moment(task.dateInitiated).format("DD MMM YYYY"),
    }));

    console.log("Formatted Tasks =>", formattedTasks);

    dispatch(getAllTasksFromDB(formattedTasks));
  } catch (error) {
    console.log(error);
    console.log(error.message.status);
  }
};
// POST Req
export const createNewTaskInDB = async (form) => {
  try {
    const res = await TaskService.createTask(form);
    return res.data;
  } catch (error) {
    console.log(error.message);
    console.log("error", error);
  }
};

// PUT Req (UPDATE)
export const updateTaskInDB = async (id, updatedTask) => {
  try {
    console.log("Updated Task Object to be saved in DB=>:", updatedTask);
    const res = await TaskService.updateTask(id, updatedTask);
    console.log("PUT update task res.data => ", res.data);
    return res.data;
  } catch (error) {
    console.log(error.message);
    console.log("error", error);
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
