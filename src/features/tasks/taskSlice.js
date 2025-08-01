// A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    // {id:"",task object},
    // {id:"",next task}
  ],
  isTasksBeingLoaded: false,
  isTaskSubmitting: false,
  searchTitle: "",
  searchByStatus: "",
};

const tasksSlice = createSlice({
  //A string name for this slice of state. Generated action type constants will use this as a prefix.
  name: "tasks",
  // The initial state for the reducer
  initialState,
  // An object of "case reducers". Key names will be used to generate actions.
  reducers: {
    // SearchbyTitle
    setSearchByTitle: (state, action) => {
      state.searchTitle = action.payload;
    },
    // searchbyStatus
    setSearchByStatus: (state, action) => {
      state.searchByStatus = action.payload;
    },
    // submiting task loading
    setTaskSubmitting: (state, action) => {
      state.isTaskSubmitting = action.payload;
    },
    // Tasks loading from DB (spinner)
    setTasksLoading: (state, action) => {
      state.isTasksBeingLoaded = action.payload;
    },

    getAllTasksFromDB: (state, action) => {
      state.tasks = action.payload;
      state.isTasksBeingLoaded = false;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTaskStatus: (state, action) => {
      const { id, newStatus } = action.payload;
      const task = state.tasks.find((task) => task._id === id);
      if (task) {
        task.assignStatus = newStatus;
      }
    },
    updateTask: (state, action) => {
      const updatedTask = action.payload;
      const index = state.tasks.findIndex(
        (task) => task._id === updatedTask._id
      );
      if (index !== -1) {
        state.tasks[index] = updatedTask;
      }
    },
    deleteTaskFromRTK: (state, action) => {
      const id = action.payload;
      state.tasks = state.tasks.filter((task) => task._id !== id);
    },
  },
});

// // Action creators are generated for each case reducer function
export const {
  setSearchByStatus,
  setSearchByTitle,
  setTaskSubmitting,
  setTasksLoading,
  deleteTaskFromRTK,
  getAllTasksFromDB,
  addTask,
  updateTaskStatus,
  updateTask,
} = tasksSlice.actions;
export default tasksSlice.reducer;
