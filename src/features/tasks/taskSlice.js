import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTaskStatus: (state, action) => {
      const { id, newStatus } = action.payload;
      const task = state.tasks.find((t) => t.id == id);
      if (task) task.assignStatus = newStatus;
    },
    updateTask: (state, action) => {
      const updatedTask = action.payload;
      const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks[index] = updatedTask;
      }
    },
  },
});

export const { addTask, updateTaskStatus, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
